"use client";
import "@/stylingComponent/screenOne.css";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function ThreeDScene() {
  // Constants
  const INITIAL_CAMERA_POSITION = new THREE.Vector3(0, 30, 25);
  const [isMobile, setIsMobile] = useState(false);
  const EARTH_SCALE = isMobile ? 0.48 : 0.58;
  const SATELLITE_SCALE = isMobile ? 0.08 : 0.1;
  const EARTH_POSITION = new THREE.Vector3(0, 0, 0);
  const SATELLITE_OFFSET = new THREE.Vector3(0, 10, -20);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Earth Component
  function Earth() {
    const earthRef = useRef();
    const { scene } = useGLTF("/khushiModels/cubsat/earth.glb");
    
    useFrame(() => {
      if (earthRef.current) {
        earthRef.current.rotation.y += 0.001;
      }
    });

    return (
      <primitive 
        ref={earthRef}
        object={scene} 
        position={EARTH_POSITION}
        scale={[EARTH_SCALE, EARTH_SCALE, EARTH_SCALE]}
      />
    );
  }

  // Satellite Component
  function Satellite() {
    const satelliteRef = useRef();
    const { scene } = useGLTF("khushiModels/cubsat/satText03.glb");
    
    useFrame(() => {
      if (satelliteRef.current) {
        const time = Date.now() * 0.001;
        satelliteRef.current.position.x = Math.sin(time) * 20;
        satelliteRef.current.position.z = Math.cos(time) * 30 - 20;
        satelliteRef.current.lookAt(EARTH_POSITION);
      }
    });

    return (
      <primitive 
        ref={satelliteRef}
        object={scene} 
        position={SATELLITE_OFFSET}
        scale={[SATELLITE_SCALE, SATELLITE_SCALE, SATELLITE_SCALE]}
      />
    );
  }

  // Lighting Setup
  function Lights() {
    return (
      <>
        <ambientLight intensity={.02} />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <hemisphereLight 
          skyColor={0xffffbb} 
          groundColor={0x080820} 
          intensity={0.5} 
        />
      </>
    );
  }

  // Grid Helper
  function Grid() {
    return <gridHelper args={[50, 50]} />;
  }

  // Camera Controller with Animation
  function CameraController({ targetPosition, cameraPosition }) {
    const { camera } = useThree();
    const controlsRef = useRef();
    const animationRef = useRef();
    
    useEffect(() => {
      if (!cameraPosition || !targetPosition) return;
      
      const startPosition = camera.position.clone();
      const startTarget = controlsRef.current?.target.clone() || new THREE.Vector3();
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = easeInOutCubic(progress);
        
        camera.position.lerpVectors(startPosition, cameraPosition, easeProgress);
        if (controlsRef.current) {
          controlsRef.current.target.lerpVectors(startTarget, targetPosition, easeProgress);
          controlsRef.current.update();
        }
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      
      animate();
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [camera, cameraPosition, targetPosition]);

    return (
      <OrbitControls
        ref={controlsRef}
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        minDistance={INITIAL_CAMERA_POSITION.length()}
        maxDistance={INITIAL_CAMERA_POSITION.length()}
      />
    );
  }

  // Easing function
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // Main Scene Component
  function Scene() {
    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, 0));
    const [cameraPosition, setCameraPosition] = useState(INITIAL_CAMERA_POSITION);

    const handleButtonClick = (buttonText) => {
      if (buttonText === "Explore More") {
        setCameraPosition(new THREE.Vector3(0, 20, 35));
        setCameraTarget(new THREE.Vector3(0, 0, 0));
      } else if (buttonText === "Discover") {
        const time = Date.now() * 0.001;
        const satellitePos = new THREE.Vector3(
          Math.sin(time) * 15,
          10,
          Math.cos(time) * 15 - 20
        );
        setCameraPosition(new THREE.Vector3(20, 10, 20));
        setCameraTarget(satellitePos);
      }
    };

    useEffect(() => {
      const buttons = document.querySelectorAll(".cta-button, .box-button");
      const clickHandler = (e) => handleButtonClick(e.target.textContent);
      
      buttons.forEach(button => {
        button.addEventListener("click", clickHandler);
      });

      return () => {
        buttons.forEach(button => {
          button.removeEventListener("click", clickHandler);
        });
      };
    }, []);

    return (
      <>
        <CameraController 
          targetPosition={cameraTarget} 
          cameraPosition={cameraPosition} 
        />
        <Lights />
        <Grid />
        <Earth />
        <Satellite />
      </>
    );
  }

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: INITIAL_CAMERA_POSITION }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true
        }}
        shadows
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -20000
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}