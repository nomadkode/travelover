import { useState } from 'react';
import GlobalStyle from './globalStyles';
import { Dropdown } from './components/Dropdown';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { heroData } from './data/heroData';

const App = () => {
  const [openIcon, setOpenIcon] = useState(false);

  const toggle = () => {
    setOpenIcon(!openIcon);
  };

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown openIcon={openIcon} toggle={toggle} />
      <Hero slides={heroData} />
    </div>
  );
};

export default App;
