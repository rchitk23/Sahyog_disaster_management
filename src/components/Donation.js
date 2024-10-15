import React from 'react';
import '../styles/Donation.css';

function Donation() {
  return (
    <section id="donations" className="donationSection">
      <h2>Donate Now!</h2>
      <div className="donationContent">
        <img 
          src="http://www.signupgenius.com/cms/socialMediaImages/disaster-relief-ideas-article-1200x800.jpg" 
          alt="Donation" 
          className="donationImage"
        />
        <div className="donationText">
          <p>
            Donations play a crucial role in disaster management. Your generous support helps us provide essential aid during emergencies, ensuring that communities affected by disasters receive the care and resources they need to rebuild their lives. Every contribution makes a difference, whether it's used for food, shelter, medical supplies, or long-term recovery projects.
          </p>
          <button className="donateButton">Donate Now</button>
        </div>
      </div>
    </section>
  );
}

export default Donation;
