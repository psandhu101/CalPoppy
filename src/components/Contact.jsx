import { libguide, contactIntro, creatorIntro, aboutJMS, aboutKurfess, aboutHayes, calPoppyResearch, poppy21_22 } from "./contactTxt"
import "../style/home.scss";
import "../style/contact.css";
import kurfess from "../images/kurfess_franz.jpeg";

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
            { aboutJMS[0] } <br /><br />
            <h4>{ calPoppyResearch.kurfess }</h4>
            <img src={kurfess} className="contactImg" alt="Dr. Franz J. Kurfess" />
            {aboutKurfess[0]}<br/>{aboutKurfess[1]}
             
        </div>
    )
}

export default Contact;
