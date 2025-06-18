import Link from "next/link";
import "@/stylingComponent/build.css"

const Image = () => {
    return(
        <div className="imageContainer" >
            <img className="image" src="/images/image.png" />
        </div>
    )
}

export default Image;