import './styles/App.css';
import About from './components/about';
import Speaker from './components/speakers';
import Landing from './components/landing';
import Nav from './components/nav';
import Workshop from './components/workshops';
import "./styles/App.css";
import Footer from './components/footer';

function App() {
  return (
    <>
      <section className='text-white'>
        <section>
          <Nav />
        </section>
        <section className='px-10 from-lightbgblue to-darkbgblue bg-gradient-to-b'
          id='Landing'>
          <Landing />
        </section>
        <div className="spacer layer1 bg-darkbgblue" />

        <section className='px-10 md:px-20 lg:px-48 from-lightbgblue to-darkbgblue bg-gradient-to-b'
          id='About'>
          <About />
        </section>
        <div className="spacer layer1 bg-darkbgblue" />

        <section className='px-10 from-lightbgblue to-darkbgblue bg-gradient-to-b'
          id='Speakers'>
          <Speaker />
        </section>
        <div className="spacer layer1 bg-darkbgblue" />

        <section className='text-gray-800 px-10 from-lightbgblue to-darkbgblue bg-gradient-to-b'
          id='Workshops'>
          <Workshop />
        </section>
        <div className="spacer layer1 bg-darkbgblue" />

        <Footer />
      </section>
    </>
  );
}

export default App;
