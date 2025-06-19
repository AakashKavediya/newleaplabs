import Link from "next/link";
import Header from "@/private/MainPageComponents/header";
import ThreeDScene from "@/private/MainPageComponents/screenOne";
import ContentLayer from "@/private/MainPageComponents/contentLayer";
import LoadingScreen from "@/private/LoadingAnimation/mainScreenLoading";
import ScreenTwo from "@/private/MainPageComponents/screenTwo";
import ScrollBoxes from "@/private/MainPageComponents/scrollingBoxs";
import SideNav from "@/private/footer/sideNav";
import Footer from "@/private/footer/footer";
import ProjectManager from "@/private/MainPageComponents/projectManager";
import ScreenThree from "@/private/MainPageComponents/screenThree";
import { Analytics } from "@vercel/analytics/next"
export default function Home() {
  return (
      <div>
        <LoadingScreen />
        <Header />
        <ThreeDScene />
        <ContentLayer />
        <br />
        {/* <ScrollBoxes /> */}
      <h2 style={{marginLeft:'auto', marginRight:'auto',fontWeight:800, fontSize:'35px',textAlign:'center', padding:'20px'}} > PROJECTS</h2>

        <ProjectManager 
          projectName1="NEW LEAP INITIATIVE CROWN WEBSITE" 
          projectDiscription1="This website represents the CROWN Club (Club for Radio Operations and Wireless Network), highlighting its mission to advance innovation in radio, satellite, and RF technologies. It features the club’s origin story, HAM radio awareness, contributions of Indian HAMs, and events like CQ Mumbai and ARSI Field Day, showcasing its active involvement in communication tech and student learning."
          src1="/images/PMcrown101.png"
          src2="/images/PMcrown102.png"
          mainImage1="/projectImages/Crown.png"

          
          projectName2="NEW LEAP INITIATIVE CROWN WEBSITE" 
          projectDiscription2="This website represents the CROWN Club (Club for Radio Operations and Wireless Network), highlighting its mission to advance innovation in radio, satellite, and RF technologies. It features the club’s origin story, HAM radio awareness, contributions of Indian HAMs, and events like CQ Mumbai and ARSI Field Day, showcasing its active involvement in communication tech and student learning."
          src3="/images/PMcrown101.png"
          src4="/images/PMcrown102.png"
          mainImage2="/projectImages/Crown.png"
        />

<ProjectManager 
          projectName1="NEW LEAP INITIATIVE CROWN WEBSITE" 
          projectDiscription1="This website represents the CROWN Club (Club for Radio Operations and Wireless Network), highlighting its mission to advance innovation in radio, satellite, and RF technologies. It features the club’s origin story, HAM radio awareness, contributions of Indian HAMs, and events like CQ Mumbai and ARSI Field Day, showcasing its active involvement in communication tech and student learning."
          src1="/images/PMcrown101.png"
          src2="/images/PMcrown102.png"
          mainImage1="/projectImages/Crown.png"

          
          projectName2="NEW LEAP INITIATIVE CROWN WEBSITE" 
          projectDiscription2="This website represents the CROWN Club (Club for Radio Operations and Wireless Network), highlighting its mission to advance innovation in radio, satellite, and RF technologies. It features the club’s origin story, HAM radio awareness, contributions of Indian HAMs, and events like CQ Mumbai and ARSI Field Day, showcasing its active involvement in communication tech and student learning."
          src3="/images/PMcrown101.png"
          src4="/images/PMcrown102.png"
          mainImage2="/projectImages/Crown.png"
        />
        
        <ScreenTwo />
        <Footer />
      </div>
  );
}
