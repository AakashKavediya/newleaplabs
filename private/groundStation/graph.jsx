"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const TemperatureKDE = () => {
  const svgRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: ''
  });

  const rawData = [
    { ID: 1, Temp1: 36.21, Temp2: 35.21 },
    { ID: 2, Temp1: 35.61, Temp2: 35.61 },
    { ID: 3, Temp1: 35.81, Temp2: 35.81 },
    { ID: 4, Temp1: 36.11, Temp2: 36.11 },
    { ID: 5, Temp1: 36.21, Temp2: 36.31 },
    { ID: 6, Temp1: 36.31, Temp2: 36.31 },
    { ID: 7, Temp1: 36.31, Temp2: 36.31 },
    { ID: 8, Temp1: 36.31, Temp2: 36.31 },
    { ID: 9, Temp1: 36.41, Temp2: 36.41 },
    { ID: 10, Temp1: 36.41, Temp2: 36.41 }
  ];

  const kernelDensityEstimator = (kernel, X) => {
    return function (V) {
      return X.map(function (x) {
        return [x, d3.mean(V, function (v) { return kernel(x - v); })];
      });
    };
  };

  const kernelEpanechnikov = (k) => {
    return function (v) {
      return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
    };
  };
  
  // Effect to handle responsive resizing
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const newWidth = Math.min(containerWidth, 1200);
        const newHeight = newWidth * 0.625;
        setDimensions({ width: newWidth, height: newHeight });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Effect to observe when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the component is intersecting and is not yet visible, trigger the animation
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(containerRef.current); // Stop observing after it's visible
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount


  // Effect to draw and animate the D3 chart
  useEffect(() => {
    // Only run the D3 code if the component is visible and has dimensions
    if (!isVisible || !svgRef.current || !dimensions.width) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 40, right: 30, bottom: 50, left: 50 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add subtle background rect
    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "rgba(255,255,255,0.05)")
      .attr("rx", 8)
      .attr("ry", 8);

    const temp1Data = rawData.map(d => d.Temp1);
    const temp2Data = rawData.map(d => d.Temp2);

    const x = d3.scaleLinear()
      .domain([d3.min([...temp1Data, ...temp2Data]) - 0.5, d3.max([...temp1Data, ...temp2Data]) + 0.5])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, 3])
      .range([height, 0]);

    // Add grid lines with animation
    svg.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(-height).tickFormat(""))
      .selectAll("line")
      .attr("stroke", "rgba(255,255,255,0.1)")
      .attr("stroke-dasharray", "2,2")
      .style("opacity", 0)
      .transition()
      .delay(300)
      .duration(800)
      .style("opacity", 1);

    svg.append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(y).tickSize(-width).tickFormat(""))
      .selectAll("line")
      .attr("stroke", "rgba(255,255,255,0.1)")
      .attr("stroke-dasharray", "2,2")
      .style("opacity", 0)
      .transition()
      .delay(300)
      .duration(800)
      .style("opacity", 1);

    const kdeTemp1 = kernelDensityEstimator(kernelEpanechnikov(0.5), x.ticks(100));
    const kdeTemp2 = kernelDensityEstimator(kernelEpanechnikov(0.5), x.ticks(100));
    const densityTemp1 = kdeTemp1(temp1Data);
    const densityTemp2 = kdeTemp2(temp2Data);

    const line = d3.line()
      .curve(d3.curveBasis)
      .x(d => x(d[0]))
      .y(d => y(d[1]));
    
    // All animations for axes, lines, areas, and legends follow...
    // No changes needed for the animation code itself as it's already excellent.
    
    // X axis with smoother animation
    const xAxis = svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .attr("class", "x-axis")
      .style("opacity", 0);

    xAxis.transition()
      .delay(200)
      .duration(800)
      .style("opacity", 1)
      .call(d3.axisBottom(x));

    xAxis.append("text")
      .attr("x", width)
      .attr("y", 35)
      .attr("fill", "white")
      .attr("text-anchor", "end")
      .text("Temperature (°C)");

    // Y axis with smoother animation
    const yAxis = svg.append("g")
      .attr("class", "y-axis")
      .style("opacity", 0);

    yAxis.transition()
      .delay(200)
      .duration(800)
      .style("opacity", 1)
      .call(d3.axisLeft(y));

    yAxis.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -40)
      .attr("x", -height / 2)
      .attr("fill", "white")
      .attr("text-anchor", "middle")
      .text("Density");

    // Title with more dynamic animation
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", -10)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .style("fill", "white")
      .style("opacity", 0)
      .style("transform", "translateY(-20px)")
      .text("Temperature Distribution")
      .transition()
      .delay(400)
      .duration(800)
      .style("opacity", 1)
      .style("transform", "translateY(0)");

    // Animated area for Temp1 with gradient
    const gradient1 = svg.append("defs")
      .append("linearGradient")
      .attr("id", "area-gradient1")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");

    gradient1.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#1f77b4")
      .attr("stop-opacity", 0.4);

    gradient1.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#1f77b4")
      .attr("stop-opacity", 0);

    svg.append("path")
      .datum(densityTemp1)
      .attr("fill", "url(#area-gradient1)")
      .attr("d", d3.area().x(d => x(d[0])).y0(y(0)).y1(y(0)))
      .transition()
      .delay(500)
      .duration(1200)
      .attrTween("d", function() {
        const interpolator = d3.interpolateArray(
          densityTemp1.map(d => [d[0], 0]),
          densityTemp1
        );
        return t => {
          const interpolatedData = interpolator(t);
          return d3.area()
            .curve(d3.curveBasis) // Ensure curve is consistent
            .x(d => x(d[0]))
            .y0(y(0))
            .y1(d => y(d[1]))
            (interpolatedData);
        };
      });

    // Animated line for Temp1 with growing effect
    const path1 = svg.append("path")
      .datum(densityTemp1)
      .attr("fill", "none")
      .attr("stroke", "#1f77b4")
      .attr("stroke-width", 2)
      .attr("stroke-linecap", "round")
      .attr("d", line)
      .attr("class", "temp1-line");
      
    const length1 = path1.node().getTotalLength();

    path1.attr("stroke-dasharray", length1 + " " + length1)
      .attr("stroke-dashoffset", length1)
      .transition()
      .delay(500)
      .duration(1500)
      .ease(d3.easeCubicOut)
      .attr("stroke-dashoffset", 0);


    // Animated area for Temp2 with gradient
    const gradient2 = svg.append("defs")
      .append("linearGradient")
      .attr("id", "area-gradient2")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");

    gradient2.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#ff7f0e")
      .attr("stop-opacity", 0.4);

    gradient2.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#ff7f0e")
      .attr("stop-opacity", 0);

    svg.append("path")
      .datum(densityTemp2)
      .attr("fill", "url(#area-gradient2)")
      .attr("d", d3.area().x(d => x(d[0])).y0(y(0)).y1(y(0)))
      .transition()
      .delay(800)
      .duration(1200)
      .attrTween("d", function() {
        const interpolator = d3.interpolateArray(
          densityTemp2.map(d => [d[0], 0]),
          densityTemp2
        );
        return t => {
          const interpolatedData = interpolator(t);
          return d3.area()
            .curve(d3.curveBasis) // Ensure curve is consistent
            .x(d => x(d[0]))
            .y0(y(0))
            .y1(d => y(d[1]))
            (interpolatedData);
        };
      });

    // Animated line for Temp2 with growing effect
    const path2 = svg.append("path")
      .datum(densityTemp2)
      .attr("fill", "none")
      .attr("stroke", "#ff7f0e")
      .attr("stroke-width", 2)
      .attr("stroke-linecap", "round")
      .attr("d", line)
      .attr("class", "temp2-line");
    
    const length2 = path2.node().getTotalLength();

    path2.attr("stroke-dasharray", length2 + " " + length2)
        .attr("stroke-dashoffset", length2)
        .transition()
        .delay(800)
        .duration(1500)
        .ease(d3.easeCubicOut)
        .attr("stroke-dashoffset", 0);

    // Legend with fade and slide animation
    const legend = svg.append("g")
      .attr("transform", `translate(${width - 150}, 20)`)
      .style("opacity", 0)
      .style("transform", "translateX(20px)");

    legend.transition()
      .delay(1200)
      .duration(600)
      .style("opacity", 1)
      .style("transform", "translateX(0)");

    // Legend items with sequential appearance
    const legendItems = [
      { color: "#1f77b4", text: "Temp1", y: 9 },
      { color: "#ff7f0e", text: "Temp2", y: 33 }
    ];

    legend.selectAll(".legend-item")
      .data(legendItems)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(0, ${i * 24})`)
      .style("opacity", 0)
      .each(function(d) {
        d3.select(this)
          .append("rect")
          .attr("width", 18)
          .attr("height", 18)
          .attr("fill", d.color)
          .attr("fill-opacity", 0.6); // Slightly more opaque for better visibility

        d3.select(this)
          .append("text")
          .attr("x", 24)
          .attr("y", 9)
          .attr("dy", "0.35em")
          .attr("fill", "white")
          .text(d.text)
          .style("font-size", "12px");
      })
      .transition()
      .delay((d, i) => 1200 + i * 200)
      .duration(400)
      .style("opacity", 1);
    
    // --- The rest of your hover effects and tooltip logic remains the same ---
    const handleMouseOver = function (event, label) {
        const lineSelection = d3.select(this);
        lineSelection
          .transition()
          .duration(200)
          .attr("stroke-width", 3.5)
          .attr("filter", "url(#glow)");

        const mean = d3.mean(label === 'Temp1' ? temp1Data : temp2Data);
        const stdDev = d3.deviation(label === 'Temp1' ? temp1Data : temp2Data);
        const content = `
          <strong>${label} Distribution</strong><br>
          Mean: ${mean.toFixed(2)}°C<br>
          Std Dev: ${stdDev.toFixed(2)}°C<br>
          Samples: ${label === 'Temp1' ? temp1Data.length : temp2Data.length}
        `;

        setTooltip({
          visible: true,
          x: event.pageX + 15,
          y: event.pageY - 30,
          content
        });
    };

    const handleMouseOut = function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-width", 2)
          .attr("filter", null);

        setTooltip(prev => ({ ...prev, visible: false }));
    };
    
    // Add glow filter for hover effects
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "glow")
      .attr("height", "150%")
      .attr("width", "150%");

    filter.append("feGaussianBlur")
      .attr("stdDeviation", "3.5")
      .attr("result", "coloredBlur");
      
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    svg.select(".temp1-line")
      .on("mouseover", (event, d) => handleMouseOver.call(path1.node(), event, 'Temp1'))
      .on("mouseout", () => handleMouseOut.call(path1.node()));

    svg.select(".temp2-line")
      .on("mouseover", (event, d) => handleMouseOver.call(path2.node(), event, 'Temp2'))
      .on("mouseout", () => handleMouseOut.call(path2.node()));

  }, [isVisible, dimensions]); // Now depends on visibility and dimensions

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
        margin: '20px auto',
        color: 'white',
        maxWidth: '1200px',
        width: '100%',
        padding: '0 20px',
        minHeight: '200px' // Ensure container has height before rendering
      }}
    >
      <h2 style={{
        color: 'white',
        textAlign: 'center',
        marginBottom: '20px',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }}>
        Temperature Distribution Analysis
      </h2>
      <svg
        ref={svgRef}
        style={{
          display: 'block',
          margin: '0 auto',
          width: '100%',
          height: 'auto',
          maxWidth: dimensions.width,
          maxHeight: dimensions.height,
          background: 'rgba(30, 30, 40, 0.7)',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      ></svg>
      {tooltip.visible && (
        <div
          style={{
            position: 'fixed', // Use fixed position to avoid being clipped
            left: tooltip.x,
            top: tooltip.y,
            background: 'rgba(40, 40, 50, 0.9)',
            color: 'white',
            border: '1px solid #555',
            padding: '12px',
            borderRadius: '6px',
            fontSize: '13px',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            pointerEvents: 'none',
            zIndex: 1000,
            backdropFilter: 'blur(3px)',
            transition: 'opacity 0.2s ease-in-out',
            opacity: 1,
            lineHeight: '1.5'
          }}
          dangerouslySetInnerHTML={{ __html: tooltip.content }}
        />
      )}
    </div>
  );
};

export default TemperatureKDE;