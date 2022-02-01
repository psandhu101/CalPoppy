import Chatbot from "./components/Chatbot";
import "./axios-config.js";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import SuggestedOptions from "./components/SuggestedOptions";
import Home from "./components/Home";
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
            <div class="topnav">
                <div class="row">
                <nav>
                    <img src="/logo192.png" height="46" alt="poppy logo"/>
                    <Link to="/">
                        <button class="navbutton" type="button">
                            Home
                        </button>
                    </Link>
                    <Link to="/chatbot">
                        <button class="navbutton" type="button">
                            Chat
                        </button>
                    </Link>
                    <Link to="/suggestions">
                        <button class="navbutton" type="button">
                            FAQ
                        </button>
                    </Link>
                    
                </nav>

                {/* A <Routes> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/chatbot" element={<Chatbot/>}/>
                    <Route path="/suggestions" element={<SuggestedOptions/>}/>
                </Routes>
                </div>
            </div>
        </Router>
    </ThemeProvider>
  );
}
