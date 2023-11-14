import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
    </div>
  )
}

export default App;