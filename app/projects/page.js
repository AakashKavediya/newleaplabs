import Link from "next/link";   
import Header from "@/private/MainPageComponents/header";
import Build from "@/private/projectComponent/build";
import "@/stylingComponent/build.css";
import BeliefSat from "@/private/projectComponent/test";
import LoadingScreen from "@/private/LoadingAnimation/mainScreenLoading";
import Footer from "@/private/footer/footer";

const Project = () => {
    return(
        <div className="profile" >  
        {/* <LoadingScreen /> */}
        <Header />
        {/* <Build /> */}
        <BeliefSat />
        <Footer />
        </div>
    )
}


export default Project;