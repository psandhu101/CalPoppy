import Chatbot from "./components/Chatbot";
import "./axios-config.js";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import About from "./components/About";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import logo from "./images/spr_sp_logo.png"

import './style/custom.scss';
import {} from "./style/navbar.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider theme={theme}>  
        <Router>
            <div class="topnav sticky-top">
                <nav>
                    <Link to="/">
                        <button class="navbutton" type="button" style={{padding: 1.5}}>
                            {/* Home */}
                            <img src={logo} className="home_logo" alt="poppy logo"/>
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
                    <Link to="/about">
                        <button class="navbutton" type="button">
                            Learn More
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button class="navbutton" type="button">
                            Contact
                        </button>
                    </Link>
                    {/* later change link to /Donate */}
                    <Link to="/404">
                        <button class="navbutton" type="button">
                            {/* donation and support tab */}
                            Help Poppy Grow
                        </button>
                    </Link>
                </nav>
            </div>

            {/* A <Routes> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/chatbot" element={<Chatbot/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/maps" element={<Maps/>}/>
                <Route path="/contact" element={<Contact/>}/>
                {/* <Route path="/donate" element={<Donate/>}/> */}
                <Route path="/404" element={<PageNotFound/>}/>
            </Routes>
        </Router>
    </ThemeProvider>
  );
}