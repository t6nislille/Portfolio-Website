import React, {useRef} from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nkjgibh', 'template_s5ftjar', form.current, 'PJ2KMQOPFKZAGp6vy')
          .then((result) => {
                console.log(result.text);
                alert('Email Sent!');
      })
      .catch((error) => {
        console.log(error.text);
        alert('Error sending email. Please try again later.');
      });
  };
    return (
        <section id='contactPage'>
            <div id='contact'>
            <h1 className='contactPageTitle'> Contact Me </h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>

                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' rows="5" placeholder="Your Message" name='message'> </textarea>

                <button type='submit' value='send' className='submitBtn'> Submit </button>

                <div className='links'> 
                    <a href="https://www.facebook.com/t6nka/" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Facebook" className='link'/>
                    </a>
                    <a href="https://www.instagram.com/t6nnis/" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Instagram" className='link'/>
                    </a>
                </div>
            </form>
            </div>
        </section>
    );
}

export default Contact