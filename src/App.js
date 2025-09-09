import Home from './Component/home';
import About from './Component/about';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './Component/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
