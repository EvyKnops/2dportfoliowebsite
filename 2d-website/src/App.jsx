import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from './assets/logo-geel-blauw.png'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        
        <div className="SectionName">
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

      <section className="SectionContact">
        <h1>Contact me</h1>

        <div className="ContactGrid">
          <div className="ContactCard">foto</div>
          <div className="ContactCard">foto</div>
          <div className="ContactCard">foto</div>
        </div>

        <div className="ContactFooter">
          <span>Linkedin</span>
          <span className="ContactLogo">
            <img src={Logo} className="logo" alt="evy logo" />
          </span>
          <span>Email</span>
        </div>
      </section>
    </>
  )
}

export default App
