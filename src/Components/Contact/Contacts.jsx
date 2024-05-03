import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msg-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phoneicon from '../../assets/phone-icon.png'
import loactionicon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contacts = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success", data)
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contactdiv'>
      <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msgicon} alt=''/></h3>
            <p>Feel free to reach out through contact form or find our contact 
                information below. Your feedback, questions, and suggestions are important to 
                us as we strive t0 provide exceptional service to our clients.</p>
            <ul>
                <li><img src={mailicon} alt=''/>xyz@cynbittechnologies.dev</li>
                <li><img src={phoneicon} alt=''/>+91-7891209777</li>
                <li><img src={loactionicon} alt=''/>32/115 Pratap Nagar, Jaipur<br/> 3032033, India</li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type = "text" name = 'name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type = "tel" name='phone' placeholder='Enter Your Mobile Number' required/>
            <label>Write Your Message Here</label>
            <textarea name="message" rows="6" placeholder='Enter Your Message' required/>
            <label>Attach File</label>
            <input type="file" name="file" accept=".pdf,.doc,.docx,.png,.jpg" className="file-input" />
            <button type='submit' className='btn1 dark-btn'>Submit Now <img src={white_arrow} alt=''/></button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Contacts