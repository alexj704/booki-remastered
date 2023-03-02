import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Hébergements from "./pages/Hébergements/Hébergements";
import Hébergement from "./pages/Hébergement/Hébergement";
import Error from "./components/Error/Error";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hebergements/all" element={<Hébergements />} />
        <Route path="/hebergements/:id" element={<Hébergement />} />
        <Route path="/notfound" element={<Error />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
