import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import AOS from 'aos';

function App() {
  const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;