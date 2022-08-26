import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import projects from './projectsData';

const Portfolio = () => (
  <section id="portfolio" className="pa4 flex justify-center flex-wrap" style={{ columnGap: '2rem' }}>
    <p className="f2 tc w-100 mb0 b">My recent work.</p>
    <p className="f4 w-100 tc" style={{ color: '#766C7F' }}>Take a look at some work that I am proud of.</p>
    {
projects.map((project) => (
  <>
    <div key={project.id} className="w-30">
      <img
        alt="work-card"
        src={project.preview}
        style={{
          width: '100%',
          height: '15rem',
          objectFit: 'contain',
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
      <button type="button">Project Details</button>
    </div>
    <div className="dn" key={project.id}>
      <img
        alt="work-card"
        src={project.popupPreview}
        style={{
          width: '100%',
          objectFit: 'contain',
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
