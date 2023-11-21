import React from 'react';
import './intro.css';
import portrait from '../../assets/vicpic.png';
import bc from '../../assets/briefcase.png'
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro'> 
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Victor</span> <br/> Aspiring Developer</span>
                <p className='introPara'>I am a student at the University of Illinois studying <br/>Mathematics and minoring in Computer Science</p>
                <Link><button className='btn'><img src={bc} alt="Hire" className='hirebtn'/> Hire me</button></Link>
            </div>
            <img src={portrait} alt="Profile" className='portrait'/>
        </section>
    )
}

export default Intro;