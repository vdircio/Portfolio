import React,{useEffect} from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/web-design.png';
import AppDesign from '../../assets/app-design.png';
import DatabaseDesign from '../../assets/server.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init({duration: 2500});
      }, []);
    return (
        <section id = 'skills'>
            <div className="skillText" data-aos="zoom-in">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a highly skilled and passionate coder with a focus on creating visually appealing and user-friendly interfaces. With a strong foundation in design and a keen eye for detail, I bring a unique blend of creativity and technical expertise to my projects. Proficient in HTML, CSS, and JavaScript, I also command a versatile skill set that includes proficiency in Python, SQL, Java, and C++. My commitment to crafting seamless digital experiences reflects not only my technical proficiency but also my dedication to delivering high-quality solutions.</span>
            </div>
            <div className="skillBars" >
                <div className="skillBar" data-aos="flip-left">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I design captivating interfaces with a focus on user delight, merging aesthetics and functionality seamlessly for an exceptional user experience.</p>
                    </div>
                </div>
                <div className="skillBar" data-aos="flip-right">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>I bring websites to life, seamlessly merging aesthetics with functionality for engaging online experiences.</p>
                    </div>
                </div>
                <div className="skillBar" data-aos="flip-left">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>I create immersive app experiences, blending captivating visuals with intuitive functionality.</p>
                    </div>
                </div>
                <div className="skillBar" data-aos="flip-right">
                    <img src={DatabaseDesign} alt="DatabaseDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Database Design</h2>
                        <p>Proficient in database systems, I excel at crafting efficient designs for seamless data retrieval, ensuring strategic information management.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;