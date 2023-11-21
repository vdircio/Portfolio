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
                <img src={Project1} alt ='' className='projectImg'/>
                <img src={Project2} alt ='' className='projectImg'/>
                <img src={Project3} alt ='' className='projectImg'/>
                <img src={Project4} alt ='' className='projectImg'/>
                <img src={Project1} alt ='' className='projectImg'/>
                <img src={Project2} alt ='' className='projectImg'/>
            </div>
        </section>
    )
}

export default Projects;