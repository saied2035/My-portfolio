import Header from './components/header/header';
import HeadingSection from './components/headingSection/headingSection';
import WorkSection from './components/workSection/workSection';
import Portfolio from './components/portfolio/portfolio';

const App = () => (
  <main className="flex flex-column">
    <Header />
    <HeadingSection />
    <WorkSection />
    <Portfolio />
  </main>
);

export default App;
