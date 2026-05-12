import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        
        <div class="SectionName">
          <h1>Evy Knops</h1>
          <p>Welcome to my Portfolio!</p>
        </div>
      </section>


      <section class="SectionProjects">
        
        <h1>Projects</h1>

        <div class="Project1">
        <p>
          Project 1
        </p>
        </div>
        
        
      </section>

      <section class="SectionContact">
        <h1>Contact me!</h1>
      </section>
    </>
  )
}

export default App
