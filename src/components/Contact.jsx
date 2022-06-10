import { contactPoppy, contactJMS } from "./contactTxt"
import { libguide } from "./contactTxt";

const Contact = () => {
    return (
        <div style={{padding: "20px"}}>
            <h1>Poppy the Chatbot</h1>
            { contactPoppy[0] } <br /><br />

            <h1>Cal Poppy Program</h1>
            { contactJMS[0] } <br /><br /> { contactJMS[1] }
            <a href={`${libguide.calpoppy}`} target="_blank" rel="noreferrer">{libguide.calpoppy}</a>
             
        </div>
    )
}

export default Contact;
