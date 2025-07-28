import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Donate from './components/Donate';
import Donors from './components/Donors';
import LandProjectDetails from './components/LandProjectDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/landprojectdetails" element={<LandProjectDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
