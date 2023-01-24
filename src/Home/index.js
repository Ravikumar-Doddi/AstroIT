import Header from "../Header"
import ShipYourItem from "../ShipYourItem"
import DestinationsServed from "../DestinationsServed"
import FooterSection from "../FooterSection"

import "./index.css"

const Home = () => (
    <div>
    <Header/>
    <ShipYourItem/>
    <hr className="h-rule"/>
    <DestinationsServed/>
    <FooterSection/>
    </div>
)




export default Home