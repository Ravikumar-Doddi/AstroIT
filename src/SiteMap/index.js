
const sitemapList = ["PRESS" , "MEDIA" , "CAREERS" , "PARTNERS" , "REVIEWS/CUSTOMER STORIES" , "VOLUMETRIC WEIGHT" , "CALCULATOR"]

const SiteMap = () => (
    <div>
    <p className="about">SITEMAP</p>
    <hr/>
    <ul className="about-container">
    {sitemapList.map(eachOne => (
        <li className="about-item">{eachOne}</li>
    ))}
    </ul>
    </div>
)



export default SiteMap