import './headingSection.css';
import face from './my-face.png';

const HeadingSection = () => (
  <section
    id="top"
    className="pt4-ns pt0 vw-100 flex flex-row-ns flex-column-m flex-column justify-center items-center flex-wrap"
    style={{
      gap: '5rem',
      backgroundColor: '#FFF',
      boxShadow: '1px 1px 0.5rem #766C7F',
      minHeight: '100vh',
    }}
  >
    <img
      alt="face"
      src={face}
      className="br-100 mt0-ns mt5-m mt2"
      style={{ backgroundColor: 'rgba(118, 108, 127, 0.5)', width: '22rem' }}
    />
    <aside className="flex flex-column items-start" style={{ flex: 0.8, color: '#0A0908' }}>
      <h1 className="fw6 mt0 w-100 tl-ns tc-m tc">
        <span className="fw3">Hi. I&apos;m</span>
        {' '}
        Saied Gaffer
      </h1>
      <p className="f4 mt0 w-100 tl-ns tc-m tc pa0-ns pl5-m pr5-m" style={{ lineHeight: '1.2', color: '#766C7F' }}>
        A software developer who builds web applications using React, Redux, and Ruby on Rails.
        Furthermore, an open-source enthusiast with a love for clean code, performance, efficiency,
        and accessibility. Pair-programming and remote work aficionado.
        Fluent in multiple languages, frameworks, and technologies,
        and capable of ramping up quickly and efficiently.
      </p>
      <a
        role="button"
        href="#work"
        className="dib pa4 pl5-ns pr5-ns pl3 pr3 f4 mt2 br-pill mb4 self-start-ns self-center-m self-center tc"
        style={{
          color: '#FFF',
          backgroundColor: '#048ba8',
          textDecoration: 'none',
        }}
      >
        Learn about what I do
      </a>
    </aside>
  </section>
);
export default HeadingSection;
