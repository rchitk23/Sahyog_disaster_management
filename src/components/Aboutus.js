import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/AboutUs.css';  

function Aboutus() {
  return (
    <section id="aboutus" className="aboutUsSection">
      <Container>
        <Row>
          <Col md={6} className="aboutContent">
            <h2>What do We Do?</h2>
            <p>
              At Sahyog, our mission is to mitigate the impact of disasters and enhance community resilience through proactive management and innovative solutions.
              We leverage technology to support disaster response, provide training for disaster preparedness, and facilitate real-time communication in times of crisis.
              Our solutions ensure that communities are better equipped to face and recover from disasters.
            </p>
          </Col>
          <Col md={6}>
            <div className="aboutImages">
              <div className="slider">
                <img src="https://tse2.mm.bing.net/th?id=OIP.HZidQXemBUNkjvb5ES-SIgAAAA&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://blog.akshayapatra.org/wp-content/uploads/2015/12/IMG_8480.jpg" alt="About Us" className="aboutImage" />
                <img src="https://tse2.mm.bing.net/th?id=OIP.kWD1upH76K7_0EZbbvC-3AHaE4&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://images.theconversation.com/files/79831/original/image-20150429-6236-16nfdtv.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=754&h=499&fit=crop&dpr=2" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.2t93u_l7z0WLs4B9odjTSgHaE8&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.EVefg9qt0qt-JMPRY8I1tgHaFj&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.2t93u_l7z0WLs4B9odjTSgHaE8&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.2t93u_l7z0WLs4B9odjTSgHaE8&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.2t93u_l7z0WLs4B9odjTSgHaE8&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.2t93u_l7z0WLs4B9odjTSgHaE8&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.2t93u_l7z0WLs4B9odjTSgHaE8&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.2t93u_l7z0WLs4B9odjTSgHaE8&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.2t93u_l7z0WLs4B9odjTSgHaE8&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.2t93u_l7z0WLs4B9odjTSgHaE8&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.2t93u_l7z0WLs4B9odjTSgHaE8&pid=Api&P=0&h=180" alt="About Us" className="aboutImage" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Aboutus;
