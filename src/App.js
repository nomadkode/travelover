import { useCallback, memo } from "react";

import { useState } from "react";
import GlobalStyle from "./GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Dropdown } from "./components/Dropdown";
import { Hero } from "./components/Hero";
import { InfoSection } from "./components/InfoSection";
import { Footer } from "./components/Footer";
import { heroData } from "./data/heroData";
import { infoData } from "./data/infoData";
import { infoDataTwo } from "./data/infoData";
import { infoDataThree } from "./data/infoData";

const App = () => {
  const [openIcon, setOpenIcon] = useState(false);

  const toggle = useCallback(() => void setOpenIcon(!openIcon), [openIcon]);

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown openIcon={openIcon} toggle={toggle} />
      <Hero slides={heroData} />
      <InfoSection {...infoData} />
      <InfoSection {...infoDataTwo} />
      <InfoSection {...infoDataThree} />
      <Footer />
    </div>
  );
};

export default memo(App);
