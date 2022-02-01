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
            height:'100vh',
          }} class='home'>
            <div style={{marginBottom: '6rem'}}>
                    <Image src={poppy_logo} height='375rem' width='375rem'  class='bg-white rounded-circle mb-2' filter='blur(rem)'>
                    </Image>
            </div>

            <Stack gap={5} className="col-md-5 mx-auto">
            
                <Link to="/chatbot">
                    <Button variant='primary' size='lg' id='btn-large' class='rounded-1' >Chat with Poppy</Button>
                </Link>
                <Link to="/suggestions">
                    <Button variant='primary' size='sm' id='btn-small' class='rounded-1'>FAQ</Button>
                </Link>

            </Stack>

        </div>

    );
}