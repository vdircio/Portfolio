import React from 'react';
import './intro.css';
import portrait from '../../assets/vicpic.png';
import downloadicon from '../../assets/downloadicon.png';
import ghIcon from '../../assets/githubicon.png';
import liIcon from '../../assets/linkedinicon.png';
// import gmIcon from '../../assets/gmailicon.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro'> 
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Victor</span> <br/> Aspiring Developer</span>
                <p className='introPara'>I am a student at the University of Illinois pursuing a Bachelors<br/>in Mathematics and a minor in Computer Science</p>
                <div className='links'>
                        <img src={liIcon} alt="LinkedIn" className='link'/>
                        <img src={ghIcon} alt="GitHub" className='link'/>
                        {/* <img src={gmIcon} alt="GMail" className='link'/> */}
                    </div>
                <Link><button className='btn'><img src={downloadicon} alt="Hire" className='hirebtn'/>Download Resume</button></Link>
            </div>
            <img src={portrait} alt="Profile" className='portrait'/>
        </section>
    )
}

export default Intro;