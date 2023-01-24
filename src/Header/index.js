import {MdLocationOn} from "react-icons/md"
import {FaWeightHanging} from "react-icons/fa"
import {BsFillStopCircleFill} from "react-icons/bs"
import "./index.css"

const headerList = ["About","How It Works","Tracking","Ratings","FAQ","Careers","Blog","Contact"]
const Header = () => (
    <div className = "header-container">
    <div className = "top-container">
    <h1 className = "main-heading">SnipBizz</h1>
    <ul className = "ul-container">
    {headerList.map(eachHeader => (
        <li className = "list-item">{eachHeader}</li>
    ))}
    </ul>
    <button className = "login-button">Login/Register</button>
    </div>
    <div className = "inputs-cont">
    <div>
    <h1 className = "slogan">Shipping happiness to everyone, anywhere.<span className = "span-item">Ontime.</span></h1>
    <p className = "para">Unde omnis iste natus error sit voluptatem accusantium doloremeque laudantium, totam rem aperiam.</p>
    <div  className = "input-el-container">
    <BsFillStopCircleFill/>
    <input className = "input-el" placeholder = "Enter pickup location" type = "text" />
    </div>
    <div  className = "input-el-container">
    <MdLocationOn className="location"/>
    <input className = "input-el" placeholder = "Enter Destination" type = "text" />
    </div>
    <div  className = "input-el-container">
    <FaWeightHanging/>
    <input className = "input-el" placeholder = "Enter Approximate Weight" type = "text" />
    </div>
    <p className = "question">Do you need help for get approximate weight and measurements?</p>
    <button className = "login-button">Get Quote</button>
    </div>
    <img src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674544730/Robot_marrg9.png" alt = "robot"/>
    </div>
    </div>
)


export default Header