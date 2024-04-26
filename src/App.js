import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Index from './components';
import About from './components/about';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
