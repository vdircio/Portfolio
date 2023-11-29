import React, {useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qckijgt', 'template_rxa7r4q', form.current, 'IArU7EoHyjZaQbdsw08Px')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log((error.text));
            });
        };
    return (
        <section id='contactPage'>
            <div id='experience'>
                <h1 className='contactPageTitle'>My Experience</h1>
                <p className='contactDesc'>
                    I have had the opportunity to work with a diverse group of companies and positions.
                </p>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'> Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                    <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name='message' rows='10' placeholder='Your Message' ></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;