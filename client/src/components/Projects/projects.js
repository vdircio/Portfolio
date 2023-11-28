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
            <div className='projectImgs'>
                <a href="https://github.com/Ishan2K1/FarmersMarket" target="_blank" rel="noopener noreferrer">
                    <img src={Project1} alt ='' className='projectImg'/>    
                </a>
                <a href="https://github.com/cs411-alawini/sp23-cs411-team085-VASH" target="_blank" rel="noopener noreferrer">
                    <img src={Project2} alt ='' className='projectImg'/>
                </a>
                <a href="https://github.com/ATLAS-Illinois/atlasvr-games/tree/Paintball_vdirci2" target="_blank" rel="noopener noreferrer">
                    <img src={Project3} alt ='' className='projectImg'/>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img src={Project4} alt ='' className='projectImg'/>
                </a>
            </div>
            {/* <button className='projectBtn'>See More</button> */}
        </section>
    )
}

export default Projects;