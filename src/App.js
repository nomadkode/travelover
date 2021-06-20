import GlobalStyle from './globalStyles';
import { Dropdown } from './components/Dropdown';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { heroData } from './data/heroData';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Dropdown />
      <Hero slides={heroData} />
    </div>
  );
};

export default App;
