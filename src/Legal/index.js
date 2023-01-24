

const legalList = ["LOGIN" , "REGISTER" , "CANCEL/RETURN POLICY" , "PRIVACY OLICY" , "TERMS AND CONDITIONS" , "LEGAL DISCLAIMER"]

const Legal = () => (
    <div>
    <p className="about">LEGAL</p>
    <hr/>
    <ul className="about-container">
    {legalList.map(eachOne => (
        <li className="about-item">{eachOne}</li>
    ))}
    </ul>
    </div>
)



export default Legal