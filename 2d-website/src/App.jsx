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


      <section className="SectionProjects">
        <h1>Projects</h1>

        <div className="ProjectsList">
          <div className="ProjectItem">
            <p>The bottom Line - University of Maastricht</p>
          </div>
          <div className="ProjectItem">
            <p>Vtuber Creation</p>
          </div>
          <div className="ProjectItem">
            <p>3d fishing game</p>
          </div>
          <div className="ProjectItem">
            <p>Branding - Rock acadamy artist</p>
          </div>
        </div>

        <a href="#" className="ProjectsMore">show more projects</a>
      </section>

      <section class="SectionContact">
        <h1>Contact me!</h1>
      </section>
    </>
  )
}

export default App
