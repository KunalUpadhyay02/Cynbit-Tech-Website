import React, { useState } from 'react';
import Modal from 'react-modal'; 
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Testimonials from './Components/Testimonials/Testimonials';
import Title from './Components/Title/Title';
import Contacts from './Components/Contact/Contacts';
import Footer from './Components/Footer/Footers';
import Services from './Components/Services/Services'
import './index.css'

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">

        <Title subTitle='' title=''/> 
        <Services/>
        <Title subTitle='Testimonials' title='What our client says'/>
        <Testimonials/>

        <div className="button-container">
          <button className='btn-main' onClick={() => setVisible(true) }>Contact Us</button>
          <Modal isOpen={visible} onRequestClose={() => setVisible(false)}>
            <Title subTitle='Contact Us' title='Get in Touch'/>
            <Contacts/>
            <center>
            <button className='btn-main' onClick={() => setVisible(false)}>Close Contact Form</button>
            </center>
          </Modal>
        </div>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
