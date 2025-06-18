import Link from "next/link";

import Describe from "./describe";
import Contribution from "./contrubution";
import Image from "./image";
import Title from "./title";
// Importing styling
import "@/stylingComponent/build.css"

const Build = () => {
    return(
        <div className="container" >
            <div className="yearContainer" >
                <button className="yearButton" ><p>10/12/2018</p></button><br/>
                <button className="yearButton" ><p>10/12/2018</p></button><br/>
                <button className="yearButton" ><p>10/12/2018</p></button><br/>
                <button className="yearButton" ><p>10/12/2018</p></button><br/>
                <button className="yearButton" ><p>10/12/2018</p></button><br/>
                <button className="yearButton" ><p>10/12/2018</p></button><br/>
            </div>
            <div className="components" >
            <div  >
            <Title />
            </div>
            <div>
            <Image />
            </div>
            <div>
            <Describe />
            </div>
            <div>
            <Contribution />
            </div>
            
            </div>
        </div>
    )
}

export default Build;