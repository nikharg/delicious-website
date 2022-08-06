import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Pages />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
