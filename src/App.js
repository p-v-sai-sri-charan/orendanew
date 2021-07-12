import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Ourwork from './components/OurWork/Ourwork'
import Contact from './components/Contact/Contact'
import  Projects  from './components/Projects/Projects'
function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Ourwork/>
      <Contact/>
      <Projects/>
    </div>
  )
}

export default App
