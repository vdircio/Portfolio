import React,{useEffect} from "react";
import './projects.css';
import Project1 from '../../assets/farmersmarket.jpg';
import Project2 from '../../assets/crime.jpg';
import Project3 from '../../assets/shoebot.png';
import Project4 from '../../assets/vr.jpg';
import Project5 from '../../assets/medifindsimage.png'
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


            <div className='cardContainer' data-aos="zoom-in-left">
                <img src={Project5} alt ='' className='projectImg'/>
                <div className='cardDesc'>
                    <h3 className='projectTitle'>Medi-Finds</h3>
                    <p className='projectDesc'>Medi-Finds helps pre-med majors by summarizing medical research papers, making it easier to find relevant articles quickly and understand key points without getting lost in dense text.</p>
                    <div className='software'>
                        <p>React</p>
                        <p>Python</p>
                        <p>Flask</p>
                        <p>NLTK</p>
                    </div>
                    <div className='codeLinks'>
                        <a href='https://github.com/vdircio/MediFinds' target='.blank'>
                            <p>Code</p>
                            <img src={github} alt="project1" className='code'/>
                        </a>
                        <a href='http://209.38.130.148:4173/' target='.blank'>
                            <p>LiveDemo</p><img src={newTab} alt="project1" className='code'/>
                        </a>
                    </div>
                </div>
                
            </div>

            <div className='cardContainer' data-aos="zoom-in-right">
                <img src={Project1} alt ='' className='projectImg'/>
                <div className='cardDesc'>
                    <h3 className='projectTitle'>Fresh Finds</h3>
                    <p className='projectDesc'>Fresh Finds is a sleek Android application designed in Android Studio, offering users a seamless and modern interface to explore nearby farmers markets. By eliminating middlemen, the app connects users directly with local vendors, providing an affordable and healthy alternative for those seeking fresh and sustainable food options.</p>
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
                    <p className='projectDesc'>This comprehensive full-stack website, powered by React for the front end, Python for the backend, and MySQL for data retrieval, enables users to compare crime rates and health inspections across California. Users can actively contribute by submitting and deleting comments on crimes, fostering community engagement. The dynamic map feature reflects real-time updates based on user comments, creating an interactive platform that enhances awareness and community-driven insights into local safety and health standards.</p>
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
                    <p className='projectDesc'>ShoeFinder is an innovative JavaScript-based application for purchasing shoes from Finish Line utilizing advanced web scraping techniques. This tool, which seamlessly navigates the Finish Line website, streamlines the shoe-buying process, providing users with a quick and efficient way to secure their favorite footwear.</p>
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
                    <p className='projectDesc'>Atlas VR, a program affiliated with the University of Illinois, is dedicated to offering students a relaxing escape during final exams. Developed in collaboration with a skilled team, the program features a collection of entertaining mini-games created in Unity, with an emphasis on hand recognition using the Meta Oculus. By providing a destressing environment, Atlas VR aims to support students' well-being during the demanding final exam season.</p>
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