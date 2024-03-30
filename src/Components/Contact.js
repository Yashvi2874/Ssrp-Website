import React from 'react'
import './Contact.css'
import Astronaut from './astronaut.png'
import arrow from './arrow.png'
function Contact() {
  return (
    <div className='contact-container'>
        <form action="" class="contact-left">
            <div class="contact-left-title">
                <h2 className='gradient-text'>Ignite the steller exchange 🔥 </h2>
                <hr />
            </div>
            <input type="text" name="name" placeholder="Your Name" class="contact-inputs" required></input>
            <input type="email" name="email" placeholder="Your Email" class="contact-inputs" required></input>
            <textarea name="message" placeholder="Your Message" class="contact-inputs" required></textarea>
            <button type="submit">Submit <img src={arrow} alt="arrow to submit" /></button>
        </form>
        <div className='contact-right'>
            <img src={Astronaut} alt="Astronaut" />
        </div>
    </div>
  )
}

export default Contact;