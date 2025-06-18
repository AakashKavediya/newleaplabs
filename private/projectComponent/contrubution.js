import Link from "next/link";
import "@/stylingComponent/build.css"
import Profile from "./profile";
const Contribution = () => {
    return(
        <div className="contributionContainer" >
            <h2 className="contributerTitle" >CONTRIBUTION</h2>
            <div className="profileSets" >
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
        </div>
        </div>
    )
}

export default Contribution;