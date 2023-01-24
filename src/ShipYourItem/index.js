import "./index.css"


const ShipYourItem = () => (
    <div className=" back-container">
    <div className="ware-container">
    <img className="ship-item" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674551898/Screenshot_74_z6psyt.png" alt = "shipping"/>
    <div>
    <h1 className="ware-heading">Ship your item to our warehouse.<span className="ware-span">We will ship to your country.</span></h1>
    <button className="login-button">Start Shipping Now</button>
    </div>
    </div>
    <h1 className="clients-heading">Our Partners</h1>
    <div className="logos-container">
    <div className="logos">
    <img className="logo" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674553560/DHL_logo_gcyrp4.png" alt = "dhlLogo"/>
    </div>
    <div className="logos">
    <img className="logo" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674554040/Fedex_tkhbbj.png" alt = "fedexLogo"/>
    </div>
    <div className="logos">
    <img className="logo" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674554198/UPS-logo_a6o9t6.png" alt = "upsLogo"/>
    </div>
    <div className="logos">
    <img className="logo" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674554331/aramexLogo_qduusp.png" alt = "aramexLogo"/>
    </div>
    </div>
    </div>

)


export default ShipYourItem