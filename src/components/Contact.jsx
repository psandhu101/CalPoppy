import { libguide, calPoppyResearch, contactIntro, contactJMS, creatorIntro } from "./contactTxt"
import "../style/home.scss";

const Contact = () => {
    return (
        <div style={{padding: "20px"}}>
            <h1>Contact</h1>
            { contactIntro[0] }
            <a href={`${libguide.calpoppy}`} target="_blank" rel="noreferrer">{ contactIntro[1] }</a>
            { contactIntro[2] }
            
            <br /><hr className="divline"></hr>

            <h1>Creators</h1>
            { creatorIntro[0] } <br /><br />

            <h2>Cal Poppy Research Team</h2> <br />
            <h4>{ calPoppyResearch.scaramozzino }</h4>
            { contactJMS[0] } <br /><br />
            {/* <h4>{ calPoppyResearch.kurfess }</h4> */}
             
        </div>
    )
}

export default Contact;
