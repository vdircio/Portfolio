import React, {useRef, useEffect} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blmlogo from '../../assets/blmlogo.png';
import atlaslogo from '../../assets/atlaslogo.png';

const Contact = () => {
    useEffect(() => {
        AOS.init({duration: 1300});
      }, []);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yd3289s', 'template_rxa7r4q', form.current, '4caw9jCEd5l8OUjpU')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email sent!');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contactPage'>
            <div id='experience'>
                <h1 className='contactPageTitle'>My Experience</h1>
                <p className='contactDesc'>
                    I have had the opportunity to work with a diverse group of companies and positions.
                </p>
                <div className='experiences'>
                    <div className='experience'>
                        <div className='inner'>
                            <div className='frontcard'>
                                <img src={blmlogo} alt='' className='expImg' />
                                <p>Bureau of Land Management</p>
                            </div>
                            <div className='backcard'>
                                <h2>Bureau of Land Management</h2>
                                <p>Spearheaded the design and development of the SharePoint site for the BLM Colorado Southwest District, enhancing file organization and retrieval.</p>
                                <p>Integrated O365 tools and utilized data entry techniques to promote long-term file organization and collaboration</p>
                                <p>Managed migration projects for storage system modernization, ensuring smooth daily operations and maintaining high-security standards through collaboration with various departments for tailored technology solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='experience'>
                        <div className='inner'>
                            <div className='frontcard'>
                                <img src={atlaslogo} alt='' className='expImg' />
                                <p>ATLAS UIUC</p>
                            </div>
                            <div className='backcard'>
                                <h2>ATLAS UIUC</h2>
                                <p>Elevated the student experience by actively participating in the design and development of an interactive game with multiple minigames, fostering a de-stressing environment during midterms and finals.</p>
                                <p>Collaborated seamlessly with cross-functional teams, ensuring the timely delivery of high-quality software products that met and exceeded project objectives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='contact'>
                <div data-aos="fade-left">
                    <h1 className='contactPageTitle'>Contact Me</h1>
                    <span className='contactDesc' > Please fill out the form below to discuss any work opportunities.</span>
                </div>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <div data-aos="fade-right">
                    <input type='text' className='name' placeholder='Your Name' name="user_name"/>
                    <input type='email' className='email' placeholder='Your Email' name="user_email"/>
                    <textarea className='msg' name="message" rows='7' placeholder='Your Message'></textarea>
                    </div>
                    <button type="submit" value="Send" className='submitBtn' data-aos="fade-up">Submit</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;