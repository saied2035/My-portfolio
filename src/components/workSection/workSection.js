import cards from './workCards';

const WorkSection = () => (
  <section>
    <p className="f2 tc b">Here&apos;s all the stuff I do.</p>
    <p className="f4 tc" style={{ color: '#766C7F' }}>Briefly, Security, performance, and efficiency.</p>
    {cards.map((card) => (
      <div key={`${card.id}`}>
        <img alt="work-card" src={card.image} />
        <p>{card.info}</p>
      </div>
    ))}
  </section>
);
export default WorkSection;
