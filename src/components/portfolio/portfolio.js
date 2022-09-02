import './portfolio.css';
import Projects from './projects/projects';

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
    <Projects />
  </section>
);

export default Portfolio;
