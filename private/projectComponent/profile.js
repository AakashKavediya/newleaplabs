import Link from "next/link";
import "@/stylingComponent/build.css"

const Profile = () => {
    return (
        <div className="profileContainer" >
            <div className="profilePicContainer">
                <img className="profilePic" src="https://i.pinimg.com/736x/ca/e9/59/cae959cc679753ed62b8a4bd8357681d.jpg" />
            </div>
            <div className="profileContent">
                <h4 className="username" >UserName</h4>
                <p className="branchname" ><b className="branch">Branch: </b>Computer Science</p>
            </div>
        </div>
    );
};

export default Profile;