
import "./index.css"

const aboutList = ["HOME" , "HOW IT WORKS" , "FAQ" , "BLOGS" , "CONACT"]

const About = () => (
    <div>
    <p className="about">ABOUT</p>
    <hr/>
    <ul className="about-container">
    {aboutList.map(eachOne => (
        <li className="about-item">{eachOne}</li>
    ))}
    </ul>
    </div>
)



export default About