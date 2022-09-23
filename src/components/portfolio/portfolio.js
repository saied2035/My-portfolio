import './portfolio.css';
import Projects from './projects/projects';
import Resume from './resume/resume';

const Portfolio = () => (
  <section
    id="portfolio"
    className="flex relative justify-center flex-wrap pa3"
    style={{
      backgroundColor: 'rgba(206, 237, 219, 0.3)',
    }}
  >
    <p className="f2 tc w-100 mb0 b" style={{ color: '#0a0908' }}>My recent work</p>
    <p className="f4 w-100 tc" style={{ color: '#766C7F' }}>Take a look at some work that I am proud of</p>
    <Projects />
    <p className="f4 w-100 tc mb4" style={{ color: '#766C7F' }}>More details about me?</p>
    <Resume />
    <p className="f4 w-100 tc" style={{ color: '#766C7F' }}>Would you like to contact me?</p>
    <a
      role="button"
      href="#contact"
      className="pa4 pl5-ns pr5-ns pl3 pr3 f4 mb6 mt2 br-pill tc"
      style={{
        color: '#FFF',
        backgroundColor: '#048ba8',
        textDecoration: 'none',
      }}
    >
      Get in touch with me
    </a>
  </section>
);

export default Portfolio;
