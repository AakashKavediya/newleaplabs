import Link from "next/link";   
import Header from "@/private/MainPageComponents/header";
import GroundStationComponent from "@/private/groundStation/page";
import TemperatureKDE from "@/private/groundStation/graph";
import "@/stylingComponent/GroundStationComponent.css"
import Footer from "@/private/footer/footer";
const GroundStation = () => {
    return(
        <>
        <Header />
        <div className="groundStattionContentContainer" >
        <GroundStationComponent />
        <br />
        <TemperatureKDE />
        <Footer />
        </div>

        </>
    )
}


export default GroundStation;