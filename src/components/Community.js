// Community.jsx
import React from 'react';
import '../styles/Community.css';

function Community() {
  return (
    <section id="community" className="communitySection">
      <div className="communityContent">
        <div className="communityText">
          <h2>Our team comes with the experience and knowledge</h2>
          <p>
            Volunteers are the unsung heroes of our communities, embodying the spirit of compassion and selflessness. 
            They are the individuals who step forward, offering their time, skills, and energy without expecting anything 
            in return. With hearts full of generosity and hands ready to help, volunteers make an invaluable difference 
            in the lives of others.
          </p>
          <div className="buttonGroup">
            <button className="primaryButton">Get Started</button>
    
          </div>
        </div>
        <div className="communityImage">
          <img src="https://st2.depositphotos.com/1265075/6065/i/450/depositphotos_60654785-stock-photo-join-us-concept.jpg" alt="Volunteers" />
        </div>
      </div>
    </section>
  );
}

export default Community;
