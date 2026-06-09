import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Logo from './assets/logo-geel-blauw.png'
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import stylescape from './assets/stylescape.png'
import brandguide from './assets/borisBrandguide.png'
import merch from './assets/borisMerch.png'
import posters from './assets/borisPoster.png'
import blenderwhite from './assets/blenderwhite.png'
import blendercolored from './assets/blendercolored.png'
import './App.css'

const projects = [
  {
    slug: 'bottom-line',
    title: 'The bottom Line - University of Maastricht',
    summary:
      'Creating a digital adaptation of a physical board game, with a focus on usability, player interaction, and frontend development.',
    description:
      'The Bottom Line was a student group project in which we transformed an existing physical board game into a digital experience. The goal was to preserve the core gameplay mechanics and user experience of the original game while adapting it for a digital platform.',
    contribution: [
      'Designed the user interface in Figma.',
      'Conducted usability tests to validate and improve the designs.',
      'Iterated on the designs based on user feedback.',
      'Developed frontend features using TypeScript.',
    ],
    tools: 'Figma,HTML, CSS, TypeScript',
    screenshot: stylescape,
    videoIds: ['KMpad-OTkJU'],
  },
  {
    slug: 'vtuber-creation',
    title: 'Vtuber Creation',
    summary:
      'A character design and digital persona project exploring animation, branding and facial tracking technology.',
    description: 'This was an individual project focused on creating a VTuber avatar. The objective was to design and develop a digital character capable of tracking and responding to facial expressions and movements in real time. The project combined character design with technical rigging and animation.',
    contribution: [
      'Designed an original VTuber character.',
      'Rigged the character to support facial tracking and expressions.',
      'Tested and refined the avatars movement and tracking performance.',
    ],
    tools: 'Krita, Live2d Cubism, VTube Studio',
    videoIds: ['Rn2sVORpfJ8', 'bS94Z3FO1E4'],
    featured: false,
  },
  {
    slug: 'Leaderboard',
    title: 'Leaderboard - Gamestate',
    summary:
      'Creating a singular leaderboard system for multiple arcade games that track player scores',
    description:'In this group project, we developed a leaderboard application that allowed users to view and compare scores and achievements. The project combined UX design, user research, and frontend development to create an engaging user experience.',
    contribution:[
      'Designed the user interface and user experience.',
      'Conducted usability testing and analyzed user feedback.',
      'Improved the design based on testing results.',
      'Developed frontend components using React.',
      'Collaborated with team members to implement the final product.'
    ],
    tools: 'Figma, HTML, CSS, React, TypeScript',
    videoIds: ['NwBG9u98qvk'],
  },
  {
    slug: 'rock-academy-branding',
    title: 'Branding - Rock academy artist',
    summary:
      'A visual identity system crafted for a rock artist, with logo, color palette, and promotional assets.',
    description: 'In collaboration with a student team, we developed a complete brand identity for a Rock Academy artist. The project focused on creating a cohesive visual identity that reflected the artists personality, music style and target audience.',
    contribution:[
      'Created a brandguideline that included logo design, color palette, typography and visual elements.',
      'Created promotional materials such as posters, social media graphics and merchandise designs.',
      'Created a Content strategy',
    ],
    tools: 'Figma, Photopea',
    screenshot: [merch, posters, brandguide],
  },
  {
    slug: '3d-website',
    title: 'combination 3D Website and 2D website',
    summary: 'A 3D website prototype blending that has a 2D website inside of it.',
    description: 'Built a 3D-inspired website using Blender and Three.js. Then I built a 2D website and placed this inside of the 3D website. This is still a work in progress.',
    contribution: [
      'Designed 3D model',
      'Integrated 3D models into the web environment using Three.js.',
      'Embedded a 2D website within the 3D environment using an iframe,',
      'https://3dportfolioroom.vercel.app/ (NOT FINISHED)'
    ],
    tools: 'Blender, Three.js, React',
    screenshot: [blenderwhite, blendercolored],
    videoIds: ['M5c-uaH80X8'],
  },
]

function SectionContact({ showImages = true }) {
  return (
    <section className="SectionContact">
      <h1>Contact me</h1>

      {showImages && (
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
      )}

      <div className="ContactFooter">
        <span>
          <a href="https://www.linkedin.com/in/evy-knops/" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
        </span>
        <span className="ContactLogo">
          <img src={Logo} className="Logo" alt="logo" />
        </span>
        <span>
          <a href="mailto:knopsevy123@gmail.com">Email</a>
        </span>
      </div>
    </section>
  )
}

function Home() {
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
          {projects.filter((project) => project.featured !== false).map((project) => (
            <div className="ProjectItem" key={project.slug}>
              <p className="ProjectTitle">
                <Link className="ProjectTitleLink" to={`/project/${project.slug}`}>
                  {project.title}
                </Link>
              </p>
              <p className="ProjectSummary">{project.summary}</p>
            </div>
          ))}
        </div>

        <Link to="/more-projects" className="ProjectsMore">
          show more projects
        </Link>
      </section>

      <SectionContact showImages={true} />
    </>
  )
}

function MoreProjects() {
  const moreProjects = projects.filter((project) => project.featured === false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="SectionProjects">
        <h1>More Projects</h1>

        <div className="ProjectsList">
          {moreProjects.map((project) => (
            <div className="ProjectItem" key={project.slug}>
              <p className="ProjectTitle">
                <Link className="ProjectTitleLink" to={`/project/${project.slug}`}>
                  {project.title}
                </Link>
              </p>
              <p className="ProjectSummary">{project.summary}</p>
            </div>
          ))}
        </div>

        <Link to="/" className="ProjectsMore">
          ← Back to main projects
        </Link>
      </section>

      <SectionContact showImages={true} />
    </>
  )
}

function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <section className="SectionProjects">
        <h1>Project not found</h1>
        <Link className="ProjectTitleLink" to="/">
          Go back to projects
        </Link>
      </section>
    )
  }

  return (
    <>
      <section className="SectionProjects">
        <h1>{project.title}</h1>
        <div className="ProjectDescription">
          <h3>Project Description</h3>
          <p>{project.description}</p>

          {project.contribution && (
            <>
              <h3>My Contribution</h3>
              <ul>
                {project.contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {project.tools && (
            <>
              <h3>Tools</h3>
              <p>{project.tools}</p>
            </>
          )}

          <div className="ProjectMedia">
            {project.videoIds && project.videoIds.map((videoId, index) => (
              <div className="ProjectVideo" key={index}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Project video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
            {project.screenshot && (
              Array.isArray(project.screenshot) ? (
                project.screenshot.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                  />
                ))
              ) : (
                <img src={project.screenshot} alt={`${project.title} screenshot`} />
              )
            )}
          </div>

          <Link className="ProjectTitleLink" to="/">
            ← Back to projects
          </Link>
        </div>
      </section>

      <SectionContact showImages={false} />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-projects" element={<MoreProjects />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
