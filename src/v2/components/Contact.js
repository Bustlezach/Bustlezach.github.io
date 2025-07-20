import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <section className="contact fade-in" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or connect with me on social media.</p>
      <a href="mailto:email@example.com" className="contact-btn">Email Me</a>
    </section>
  )
}

export default Contact