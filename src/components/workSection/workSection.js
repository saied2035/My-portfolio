import './workSection.css';
import cards from './workCards';

const WorkSection = () => (
  <section id="work" className="flex flex-wrap pa4 pb3 pt0" style={{ columnGap: '1rem' }}>
    <p className="f2 tc w-100 mb0 b">Here&apos;s all the stuff I do.</p>
    <p className="f4 w-100 tc" style={{ color: '#766C7F' }}>Briefly, Security, performance, and efficiency.</p>
    {cards.map((card) => (
      <div
        key={`${card.id}`}
        className="grow flex center flex-column br3 pl2 pr2 mb2"
        style={{ backgroundColor: 'rgba(80,114,60,0.2)' }}
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
        <p className="tc f4 fw5" style={{ color: 'black' }}>{card.info}</p>
      </div>
    ))}
  </section>
);
export default WorkSection;
