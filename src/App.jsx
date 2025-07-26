import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import GlobalClipPaths from './assets/svg/ClipPath';

const App = () => {

  return (
    <>
    <GlobalClipPaths />
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
     <Header />
     <Hero />
     <About />
     <Services />
     <Projects />
     <Footer />
    </div>

    <ButtonGradient />
    </>
  );
};

export default App
