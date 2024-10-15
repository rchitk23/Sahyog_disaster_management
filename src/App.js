import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Community from './components/Community';
import Donation from './components/Donation';
import Services from './components/Services';
import Footer from './components/Footer';
import './styles/App.css';
import AboutUs from './components/Aboutus';
// import RefrshHandler from './RefreshHandler';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Community />
      <Donation />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
