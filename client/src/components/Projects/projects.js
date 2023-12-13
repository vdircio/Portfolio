import React,{useEffect} from "react";
import './projects.css';
import Project1 from '../../assets/farmersmarket.jpg';
import Project2 from '../../assets/crime.jpg';
import Project3 from '../../assets/shoebot.png';
import Project4 from '../../assets/vr.jpg';
import github from '../../assets/gh.png';
import newTab from '../../assets/newtab.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({duration: 2300});
      }, []);
    return (
        <section id="projects">
            <div className="portfolioText" data-aos="zoom-out">
                <h2 className='projectsTitle'>My Portfolio</h2>
                <span className='projectsDesc'>Dive into my portfolio—a collection of projects where creativity meets precision. From sleek designs to robust systems, each project is a testament to passion and innovation.</span>
            </div>


            <div className='cardContainer' data-aos="zoom-in-right">
                <img src={Project1} alt ='' className='projectImg'/>
                <div className='cardDesc'>
                    <h3 className='projectTitle'>Fresh Finds</h3>
                    <p className='projectDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                    <div className='software'>
                        <p>Java</p>
                    </div>
                    <div className='codeLinks'>
                        <a href='https://github.com/Ishan2K1/FarmersMarket' target='.blank'>
                            <p>Code</p>
                            <img src={github} alt="project1" className='code'/>
                        </a>
                        <a href='https://drive.google.com/file/d/1X-sotWji05J8HUP2zN_G0bjcCHqMmOsT/view' target='.blank'>
                            <p>LiveDemo</p><img src={newTab} alt="project1" className='code'/>
                        </a>
                    </div>
                </div>
                
            </div>
            <div className='cardContainer' data-aos="zoom-in-left">
                <img src={Project2} alt ='' className='projectImg'/>
                <div className='cardDesc'>
                    <h3 className='projectTitle'>Crime and Health Inspections <br/>in California</h3>
                    <p className='projectDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                    <div className='software'>
                        <p>React.js</p>
                        <p>Flask.js</p>
                        <p>Python</p>
                        <p>MySQL</p>
                        <p>GCP</p>
                    </div>
                    <div className='codeLinks'>
                        <a href='https://github.com/cs411-alawini/sp23-cs411-team085-VASH' target='.blank'>
                            <p>Code</p>
                            <img src={github} alt="project1" className='code'/>
                        </a>
                        <a href='' target='.blank'>
                            <p>LiveDemo</p><img src={newTab} alt="project1" className='code'/>
                        </a>
                    </div>
                </div>
                
            </div>
            <div className='cardContainer' data-aos="zoom-in-right">
                <img src={Project3} alt ='' className='projectImg'/>
                <div className='cardDesc'>
                    <h3 className='projectTitle'>Shoe Finder</h3>
                    <p className='projectDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                    <div className='software'>
                        <p>JavaScript</p>
                    </div>
                    <div className='projectLinks'></div>
                    <div className='codeLinks'>
                        <a href='https://www.linkedin.com/in/victor-dircio-53205721b/' target='.blank'>
                            <p>Code</p>
                            <img src={github} alt="project1" className='code'/>
                        </a>
                        <a href='https://www.linkedin.com/in/victor-dircio-53205721b/' target='.blank'>
                            <p>LiveDemo</p><img src={newTab} alt="project1" className='code'/>
                        </a>
                    </div>
                </div>
                
            </div>
            <div className='cardContainer' data-aos="zoom-in-left">
                <img src={Project4} alt ='' className='projectImg'/>
                <div className='cardDesc'>
                    <h3 className='projectTitle'>ATLAS VR</h3>
                    <p className='projectDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                    <div className='software'>
                        <p>C#</p>
                        <p>Unity 3D</p>
                    </div>
                    <div className='projectLinks'></div>
                    <div className='codeLinks'>
                        <a href='' target='.blank'>
                            <p>Code</p>
                            <img src={github} alt="project1" className='code'/>
                        </a>
                        <a href='' target='.blank'>
                            <p>LiveDemo</p><img src={newTab} alt="project1" className='code'/>
                        </a>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Projects;