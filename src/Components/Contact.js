import React from 'react'
import './Contact.css'
import arrow from './arrow.png'
export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2397918c-ebc8-4820-b076-a36504734c8d");

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
  return (
    <div className='contact-container' id='contact'>
        <form onSubmit={onSubmit} className="contact-left">
            <div className="contact-left-title">
                <h2 className='gradient-text'>Ignite the steller exchange 🔥 </h2>
                <hr />
            </div>
            <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required></input>
            <input type="email" name="email" placeholder="Your Email Id" className="contact-inputs" required></input>
            <input type="number" name="number" placeholder="Your Mobile No" className="contact-inputs" required></input>
            <textarea name="message" placeholder="Your Purpose of Contact" className="contact-inputs" required></textarea>
            <button type="submit">Submit <img src={arrow} alt="arrow to submit" /></button>
        </form>
        <span className='verification'>{result}</span>
      </div>
  );
}
