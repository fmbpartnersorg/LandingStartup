import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Work } from './components/Work';
import { Team } from './components/Team';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './index.css';
import './footer.css';
import './sections.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Work />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
