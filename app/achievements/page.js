import Link from "next/link";   
import Header from "@/private/MainPageComponents/header";
import AchievementsTimeline from "@/private/AchievementComponent/achievementTimeline";
import Footer from "@/private/footer/footer";

const Achievement = () => {
    return(
        <div>
        <Header />
        <AchievementsTimeline />
        <Footer />
        </div>
    )
}


export default Achievement;