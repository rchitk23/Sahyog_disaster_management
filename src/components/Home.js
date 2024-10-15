import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="homeSection">
      <img
        src="http://upload.wikimedia.org/wikipedia/commons/e/ef/FEMA_-_43881_-_Disaster_Scene_from_Deadly_Tornado_in_Yazoo_City,_Mississippi.jpg"
        alt="Disaster Scene"
        className="homeImage"
      />
      <div className="homeContent">
        <h1>Welcome to Sahyog</h1>
        <p>Our website provides crucial information and support during disasters...</p>
      </div>
      <div class="sos-button">
        <a href="tel:1234567890" title="Emergency SOS Call">SOS</a>
      </div>
    </section>
  );
}

export default Home;
