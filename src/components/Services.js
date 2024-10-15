import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    <section id="services" className="servicesSection">
      <h2>Our Services</h2>
      <div className="serviceItems">
        <div className="serviceItem">
          <h3>Real-Time Data Imaging</h3>
          <p>Receive immediate notifications and updates on ongoing and upcoming disaster events to stay informed and safe.
          </p>
        </div>
        <div className="serviceItem">
          <h3>Resource Locator</h3>
          <p>Find critical resources such as nearby shelters, medical facilities, and relief centers quickly and efficiently.It enhance  the effectiveness of disaster management.
          </p>
        </div>
        <div className="serviceItem">
          <h3>Communities</h3>
          <p>Communities play important role in preparedness ,response,recovery.During disaster they provide immediate support such as first aid,shelter</p>
        </div>
        <div className="serviceItem">
          <h3>SOS</h3>
          <p>The SOS feature is a crucial safety tool. Sos serves as a critical distress signal that conveys an urgent need for help</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
