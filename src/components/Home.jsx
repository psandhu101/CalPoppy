import background from "../images/poppymtn.PNG";
import poppy_logo from "../images/spr_logo.png";
import {Link} from "react-router-dom";
import {Stack, Image, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "../style/home.scss"


export default function Home() {
    return (

        <div style={{  
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
          }} class='home'>
            <div style={{marginBottom: '6rem'}}>
                    <Image src={poppy_logo} height='375rem' width='375rem'  class='bg-white rounded-circle mb-2' filter='blur(rem)'>
                    </Image>
            </div>

            <Stack gap={5} className="col-md-5 mx-auto">
            {/* col-md-5 is causing the link to extend past the button */}
                <Link to="/chatbot">
                    <Button variant='primary' size='lg' id='btn-large' class='rounded-1' >Chat with Poppy</Button>
                </Link>
                <Link to="/suggestions" marginLeft='50rem' marginRight='10rem'>
                    <Button variant='primary' size='sm' id='btn-small' class='rounded-1'>FAQ</Button>
                </Link>

            </Stack>

        </div>

    );
}