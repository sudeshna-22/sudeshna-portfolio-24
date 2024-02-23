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
import Belief from './components/additional/Belief';
import Wave from './components/additional/Wave';
import UnderDevelopment from './components/additional/UnderDevelopment';
import Passion from './components/passion/Passion';

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
        <Testimonial />
        <Contact />
        <Footer />
        {/* <UnderDevelopment /> */}
      </main>
    </>
  );
}

export default App;
