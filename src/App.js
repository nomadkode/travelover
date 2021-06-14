import GlobalStyle from './globalStyles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
