import React, { useEffect } from 'react'
import './Contact.css'
import arrow from './arrow.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "92c28c76-5418-4583-b23c-c91031fa23c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(()=>{
    AOS.init({duration:"2000"});

  },[]);

  return (
    <div className='contact-container' id='contact' >
        <form onSubmit={onSubmit} className="contact-left">
            <div className="contact-left-title">
                <h2 className='gradient-text' data-aos="fade-down">Ignite the steller exchange 🔥 </h2>
                <hr />
            </div>
            <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required data-aos="fade-right"></input>
            <input type="email" name="email" placeholder="Your Email Id" className="contact-inputs" required data-aos="fade-left"></input>
            <input type="number" name="number" placeholder="Your Mobile No" className="contact-inputs" required data-aos="fade-right"></input>
            <textarea name="message" placeholder="Your Purpose of Contact" className="contact-inputs" required data-aos="fade-left"></textarea>
            <button type="submit" data-aos="fade-right" className='button'>Submit 🡲</button>
        </form>
        <span className='verification'>{result}</span>
        <div className="head-contact" data-aos="fade-up">
          <h4>Rishikesh Bhintade</h4>
          <h4><span class="material-symbols-outlined">call</span> +917056103520</h4>
          <h4><span class="material-symbols-outlined" style={ {margin: '5'}}>mail</span><a href="mailto:ssrp.somaiya.edu" style = {{color:'white'}}>ssrp.somaiya.edu</a></h4>

        </div>
      </div>
      
  );
}
