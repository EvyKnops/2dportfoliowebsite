import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from './assets/logo-geel-blauw.png'
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import stylescape from './assets/stylescape.png'
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
            <p className="ProjectTitle">The bottom Line - University of Maastricht</p>
            <div className="ProjectDescription">
              <h3>Project Description</h3>
              <p>
                The Bottom Line was a group project in which we transformed an existing physical board game into a digital experience. The goal was to preserve the core gameplay mechanics and user experience of the original game while adapting it for a digital platform. The project focused on usability, interaction design, and frontend development.
              </p>

              <h3>My Contribution</h3>
              <ul>
                <li>Designed the user interface in Figma.</li>
                <li>Conducted usability tests to validate and improve the designs.</li>
                <li>Iterated on the designs based on user feedback.</li>
                <li>Developed frontend features using TypeScript.</li>
                <li>Collaborated with team members to align design and development decisions.</li>
              </ul>

              <h3>Tools</h3>
              <p>Figma, TypeScript</p>

              <div className="ProjectMedia">
                <div className="ProjectVideo">
                  <iframe
                    src="https://www.youtube.com/embed/KMpad-OTkJU"
                    title="Project video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <img src={stylescape} alt="bottom line screenshot" />
              </div>
            </div>
          </div>
          <div className="ProjectItem">
            <p className="ProjectTitle">Vtuber Creation</p>
            <p className="ProjectDescription">A character design and digital persona project exploring animation, branding, and social presence for a virtual talent.</p>
          </div>
          <div className="ProjectItem">
            <p className="ProjectTitle">3d fishing game</p>
            <p className="ProjectDescription">A playful 3D game prototype built around fishing mechanics, environment design, and interactive animation.</p>
          </div>
          <div className="ProjectItem">
            <p className="ProjectTitle">Branding - Rock acadamy artist</p>
            <p className="ProjectDescription">A visual identity system crafted for a rock artist, with logo, color palette, and promotional assets.</p>
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
