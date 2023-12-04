import React from 'react';
import './projects.css';
import Project1 from '../../assets/farmersmarket.jpg';
import Project2 from '../../assets/crime.jpg';
import Project3 from '../../assets/shoebot.png';
import Project4 from '../../assets/vr.jpg';

const Projects = () => {
    return (
        <section id="projects">
            <h2 className='projectsTitle'>My Portfolio</h2>
            <span className='projectsDesc'>Dive into my portfolio—a collection of projects where creativity meets precision. From sleek designs to robust systems, each project is a testament to passion and innovation.</span>

            <div className='cardContainer'>
                <img src={Project1} alt ='' className='projectImg'/>
                <div className='cardDesc'>
                    <h3 className='projectTitle'>Fresh Finds</h3>
                    <p className='projectDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                    <div className='software'>
                        <p>Java</p>
                    </div>
                    <div className='projectLinks'></div>
                </div>
                
            </div>
            <div className='cardContainer'>
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
                    <div className='projectLinks'></div>
                </div>
                
            </div>
            <div className='cardContainer'>
                <img src={Project3} alt ='' className='projectImg'/>
                <div className='cardDesc'>
                    <h3 className='projectTitle'>Fresh Finds</h3>
                    <p className='projectDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                    <div className='software'>
                        <p>JavaScript</p>
                    </div>
                    <div className='projectLinks'></div>
                </div>
                
            </div>
            <div className='cardContainer'>
                <img src={Project4} alt ='' className='projectImg'/>
                <div className='cardDesc'>
                    <h3 className='projectTitle'>Fresh Finds</h3>
                    <p className='projectDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                    <div className='software'>
                        <p></p>
                    </div>
                    <div className='projectLinks'></div>
                </div>
                
            </div>
        </section>
    )
}

export default Projects;