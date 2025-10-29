import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Home from './components/home/Home';
import Interest from './components/interest/Interest';
import Expertise from './components/expertise/Expertise';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';
import Wave from './components/additional/Wave';
import SocialMedia from './components/footer/SocialMedia';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Interest />
        <Wave />

        <Expertise />
        {/* <Belief /> */}
        {/* <Wave /> */}
        <Project />
        {/* <WaveWhite /> */}
        <Testimonial />
        <Contact />
        <SocialMedia />
        <Footer />
        {/* <UnderDevelopment /> */}
      </main>
    </>
  );
}

export default App;
