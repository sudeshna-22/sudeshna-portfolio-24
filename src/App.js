import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
