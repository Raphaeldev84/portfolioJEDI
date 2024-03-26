import AboutMe from "./AboutMe"
import Image from "./Image"
 
function Background(){
    return(
        <div className="background">
            <div className="left">
                <Image/>
                <AboutMe/>
            </div>
            <div className="right">
                <AboutMe/>
                <AboutMe/>
            </div>
        </div>
    )
}
 
export default Background