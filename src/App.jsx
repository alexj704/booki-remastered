import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Hébergements from "./pages/Hébergements/Hébergements";
import Hébergement from "./pages/Hébergement/Hébergement";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hebergements/all" element={<Hébergements />} />
        <Route path="/hebergements/:id" element={<Hébergement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
