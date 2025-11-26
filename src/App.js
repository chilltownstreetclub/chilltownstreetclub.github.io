import { ThemeProvider, BaseStyles } from '@primer/react';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Runinfo } from './components/Runinfo';
import { Yogainfo } from './components/Yogainfo';
import { Slideshow } from './components/Slideshow';
import { Footer } from './components/Footer';
import { AutoScrollCarousel } from './components/AutoScrollCarousel';
import { Spin } from './components/Spin';
import { HamburgerMenu } from './components/HamburgerMenu';
import './scss/Header.scss'; // Ensure your styles include the announcement bar

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <HamburgerMenu />
        <Header />
        <AboutMe />
        <Runinfo />
        <Yogainfo />
        <Spin />
        <Slideshow />
        <AutoScrollCarousel />
        <Footer />
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
