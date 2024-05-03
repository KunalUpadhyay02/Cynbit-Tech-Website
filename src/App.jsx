import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'
import Contacts from './Components/Contact/Contacts'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Testimonials' title = 'What our client says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title = 'Get in Touch'/>
        <Contacts/>
      </div>
    </div>
  )
}

export default App