import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Project } from './components/project'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Resume } from './components/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
       
      <div >
        <Router>
           <Navbar />

        <Routes>
           <Route path="/" element={<>
             <About />
             <Skills />
             <div id="projects">
                 <Project />
               </div>
              </>} />
            
           <Route path="/resume" element={<Resume />} />

        </Routes>
            

        </Router>
        

      </div>
      

  )
}

export default App
