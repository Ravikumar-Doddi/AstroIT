import "./index.css"

const DestinationsServed = () => (
    <div>
    <div className="destinations-cont">
    <h1 className="destinations-heading">Destinations Served</h1>
    <p className = "destinations-para">Unde omnis iste natus error sit voluptatem accusantium doloremeque laudantium, totam rem aperiam.</p>
    <img className="map" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674555849/Screenshot_75_xp27or.png" alt = "map"/>
    </div>
    <div className="cities-container">
    <div className="delhi-container">
    <img className="city-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674556525/LotusTemple_lpc4z1.webp" alt = "delhi"/>
    <p className="delhi">Delhi</p>
    <p className="delhi-price">Lowest Price $25.00</p>
    </div>
    <div className="city-container">
    <img className="city-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674557549/Newyork_denztr.jpg" alt = "newyork"/>
    <p className="city">Newyork</p>
    <p className="price">Lowest Price $10.00</p>
    </div>
    <div className="city-container">
    <img className="city-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674557666/London_zk506x.webp" alt = "london"/>
    <p className="city">London</p>
    <p className="price">Lowest Price $15.00</p>
    </div>
    <div className="city-container">
    <img className="city-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674557675/Germany_e5wczg.jpg" alt = "germany"/>
    <p className="city">Germany</p>
    <p className="price">Lowest Price $18.00</p>
    </div>
    <div className="city-container">
    <img className="city-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1674557679/Netherlands_o2zrn3.jpg" alt = "netherlands"/>
    <p className="city">Netherlands</p>
    <p className="price">Lowest Price $17.00</p>
    </div>
    </div>
    </div>
)


export default DestinationsServed