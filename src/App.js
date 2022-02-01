import Chatbot from "./components/Chatbot";
import "./axios-config.js";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import SuggestedOptions from "./components/SuggestedOptions";
import Home from "./components/Home";
import './style/custom.scss';
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
            <div>
                <nav>
                    <div>
                        <Link to="/">
                            <button type="button">
                                Home
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/chatbot">
                            <button type="button">
                                Chat
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/suggestions">
                            <button type="button">
                                Suggestions
                            </button>
                        </Link>
                    </div>
                </nav>

                {/* A <Routes> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/chatbot" element={<Chatbot/>}/>
                    <Route path="/suggestions" element={<SuggestedOptions/>}/>
                </Routes>
            </div>
        </Router>
    </ThemeProvider>
  );
}
