import './workSection.css';
import cards from './workCards';

const WorkSection = () => (
  <section
    id="work"
    className="flex flex-wrap pa4-ns pa2 pb3 pt0"
    style={{
      columnGap: '1rem',
      backgroundColor: 'rgba(174,195,176,0.3)',
      boxShadow: '0.5px red',
    }}
  >
    <p className="f2 tc w-100 mb0 b">Here&apos;s all the stuff I do.</p>
    <p className="f4 w-100 tc" style={{ color: '#766C7F' }}>Briefly, Security, performance, and efficiency.</p>
    {cards.map((card) => (
      <div
        key={`${card.id}`}
        className="info-card grow flex center flex-column br3 pl2 pr2 mb3"
        style={{ backgroundColor: '#fff' }}
      >
        <img
          alt="work-card"
          src={card.image}
          style={{
            width: '100%',
            height: '15rem',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
        <p className="tc f4 fw6" style={{ color: '#0a0908' }}>{card.info}</p>
      </div>
    ))}
    <div className="w-100 flex flex-column items-center justify-center">
      <p className="f4 w-100 tc" style={{ color: '#766C7F' }}>Do you want to explore more?</p>
      <a
        role="button"
        href="#portfolio"
        className="pa4 pl5-ns pr5-ns pl3 pr3 f4 mt2 br-pill mb4 tc"
        style={{
          color: '#FFF',
          backgroundColor: '#048ba8',
          textDecoration: 'none',
        }}
      >
        See some of my recent work
      </a>
    </div>
  </section>
);
export default WorkSection;
