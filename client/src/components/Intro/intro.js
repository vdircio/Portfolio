import React from 'react';
import './intro.css';
import portrait from '../../assets/vicpic.png';
import ghIcon from '../../assets/githubicon.png';
import liIcon from '../../assets/linkedinicon.png';
// import gmIcon from '../../assets/gmailicon.png';
import {Link} from 'react-scroll';
import resume from '../../assets/VictorDircio_Resume.pdf';

const Intro = () => {
    return (
        <section id='intro'> 
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Victor</span> <br/> Aspiring Developer</span>
                <p className='introPara'>I am a student at the University of Illinois pursuing a Bachelors<br/>in Mathematics and a minor in Computer Science</p>
                <div className='links'>
                        <a href='https://www.linkedin.com/in/victor-dircio-53205721b/' target='.blank'>
                            <img src={liIcon} alt="LinkedIn" className='link'/>
                        </a>
                        <a href='https://github.com/vdircio' target='.blank' rel="noopener noreferrer">
                            <img src={ghIcon} alt="GitHub" className='link'/>
                        </a>
                        {/* <img src={gmIcon} alt="GMail" className='link'/> */}
                    </div>        
                    <a href= {resume} download="VictorDircioResume" className='mainbtn'>
                        <button className='btn'>Download Resume</button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    
            </div>
            <img src={portrait} alt="Profile" className='portrait'/>
        </section>
    )
}

export default Intro;