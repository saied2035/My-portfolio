import Header from './components/header/header';
import HeadingSection from './components/headingSection/headingSection';
import WorkSection from './components/workSection/workSection';

const App = () => (
  <main className="flex flex-column">
    <Header />
    <HeadingSection />
    <WorkSection />
  </main>
);

export default App;
