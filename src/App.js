import Chatbot from "./components/Chatbot";
import "./axios-config.js";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import SuggestedOptions from "./components/FAQ";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Donate from "./components/Donate";
import Contact from "./components/Contact";

// import logo from "./images/logo192.png"
import logo from "./images/spr_sp_logo.png"
import './style/custom.scss';
import {} from "./style/navbar.css"

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider theme={theme}>  
        <Router>
            <div class="topnav sticky-top">
                <div class="row">
                    <nav>
                        <Link to="/">
                            <button class="navbuttonLogo" type="button">
                            <img src={logo}  height="46" alt="poppy logo"/>
                            </button>
                        </Link>
                        <Link to="/chatbot">
                            <button class="navbutton" type="button">
                                Chat
                            </button>
                        </Link>
                        <Link to="/maps">
                            <button class="navbutton" type="button">
                                Maps
                            </button>
                        </Link>
                        <Link to="/suggestions">
                            <button class="navbutton" type="button">
                                About
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button class="navbutton" type="button">
                                Contact
                            </button>
                        </Link>
                        <Link to="/donate">
                            <button class="navbutton" type="button">
                                Donate
                            </button>
                        </Link>
                            
                    </nav>

                    {/* A <Routes> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/chatbot" element={<Chatbot/>}/>
                <Route path="/suggestions" element={<SuggestedOptions/>}/>
                <Route path="/maps" element={<Maps/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/donate" element={<Donate/>}/>
            </Routes>
        </Router>
    </ThemeProvider>
  );
}
