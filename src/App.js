import Home from './Component/home';
import About from './Component/about';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './Component/contact';
import Nav from './Component/Navbar';

function App() {
  return (
    <Router>
    <Nav title="React app"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
