import './portfolio.css';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import projects from './projectsData';

const Portfolio = () => (
  <section
    id="portfolio"
    className="flex justify-center flex-wrap pa3"
    style={{
      columnGap: '5rem',
      backgroundColor: 'rgba(206, 237, 219, 0.3)',
    }}
  >
    <p className="f2 tc w-100 mb0 b" style={{ color: '#0a0908' }}>My recent work.</p>
    <p className="f4 w-100 tc" style={{ color: '#766C7F' }}>Take a look at some work that I am proud of.</p>
    {
projects.map((project) => (
  <>
    <div
      key={project.id}
      className="project-card bg-black flex center flex-column items-center br3 pl2 pr2 mb3"
      style={{ backgroundColor: 'rgba(74, 80, 67, 0.3)' }}
    >
      <img
        alt="work-card"
        className="mt2 br3"
        src={project.preview}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <h2 style={{
        background: '-webkit-linear-gradient(90deg,#766C7F 30%, #048ba8 70%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      >
        {project.name}
      </h2>
      <ul className="list flex flex-wrap justify-center pl1 pr1 mb4" style={{ gap: '0.5rem' }}>
        {
        project.technologies.map((tech) => (
          <li key={project.id}>
            <a
              className="tech-link dib pa1 pl3 pr3 br-pill fw6 b"
              href={tech.link}
              target="_blank"
              rel="noreferrer"
            >
              {tech.name}
            </a>
          </li>
        ))
        }
      </ul>
      <button
        type="button"
        className="project-detail pointer pa2 pl3 pr3 br3 mb3 tc b--none center"
      >
        Project Details
      </button>
    </div>
    <div className="dn" key={project.id}>
      <img
        alt="work-card"
        src={project.popupPreview}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <h2>{project.name}</h2>
      <ul className="list">
        {
        project.technologies.map((tech) => (
          <li key={project.id}><a clssName="db" href={tech.link} target="_blank" rel="noreferrer">{tech.name}</a></li>
        ))
        }
      </ul>
      <p>{project.info}</p>
      <a className="db" href={project.demo}>
        Live Demo
        {' '}
        <BiLinkExternal />
      </a>
      <a className="db" href={project.source}>
        Source Code
        {' '}
        <AiFillGithub />
      </a>
    </div>
  </>
))
    }
  </section>
);

export default Portfolio;
