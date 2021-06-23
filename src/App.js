import { useState } from 'react';
import GlobalStyle from './globalStyles';
import { Navbar } from './components/Navbar';
import { Dropdown } from './components/Dropdown';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { heroData } from './data/heroData';
import { infoData } from './data/infoData';

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
      <InfoSection {...infoData} />
    </div>
  );
};

export default App;
