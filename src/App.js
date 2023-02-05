import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import AboutUs from './Components/AboutUsPage/AboutUs';
import Pricing from './Components/PricingPage/Pricing';
import BasePage from './Components/BasePage';
// import About from './Components/HomePage/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<BasePage/>}>
        <Route element={<Home />} index></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
