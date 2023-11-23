import React from 'react';
import './contact.css';
import ghIcon from '../../assets/githubicon.png';
import liIcon from '../../assets/linkedinicon.png';
import gmIcon from '../../assets/gmailicon.png';

const Contact = () => {
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Experience</h1>
                <p className='clientDesc'>
                    I have had the opportunity to work with a diverse group of companies and positions.

                </p>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'> Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name'/>
                    <input type='email' className='email' placeholder='Your Email'/>
                    <textarea className='msg' name='message' rows='10' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={liIcon} alt="LinkedIn" className='link'/>
                        <img src={ghIcon} alt="GitHub" className='link'/>
                        <img src={gmIcon} alt="GMail" className='link'/>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Contact;