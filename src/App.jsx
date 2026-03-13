import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsOfService from "./components/TermsOfService.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header>
                <h1>Silver Agent</h1>
                <p>
                  {" "}
                  Silver Agent provides general Medicare information only. This
                  AI assistant does not provide insurance advice or plan
                  recommendations. Please do not share sensitive personal or
                  medical information in this chat. A licensed Medicare
                </p>
                <main>
                  <div>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    {" | "}
                    <Link to="/terms-of-service">Terms of Service</Link>
                  </div>
                </main>
              </header>
            </div>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
