import GlobalStyle from './globalStyles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { heroData } from './data/heroData';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Hero slides={heroData} />
    </div>
  );
};

export default App;
