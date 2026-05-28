import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from './assets/logo-geel-blauw.png'
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
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
          <div className="ContactCard">
          
            <img src={foto2} className="foto2" alt="foto evy2" />
          </div>  
          
          <div className="ContactCard2">
            <img src={foto1} className="foto1" alt="foto evy" />

          </div>
          <div className="ContactCard">
            
            <img src={foto2} className="foto2" alt="foto evy2" />
          </div>
        </div>

        <div className="ContactFooter">
          <span>
            <a href="https://www.linkedin.com/in/evy-knops/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </span>
          <span className="ContactLogo">
            <img src={Logo} className="Logo" alt="logo" />
          </span>
          <span>
            <a href="mailto:knopsevy123@gmail.com">Email</a>
          </span>
        </div>
      </section>
    </>
  )
}

export default App
