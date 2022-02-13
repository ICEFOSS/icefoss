import './styles/App.css';
import About from './components/about';
import Speaker from './components/speakers';
import Landing from './components/landing';
import Nav from './components/nav';
import Workshop from './components/workshops';
import "./styles/App.css";
import Footer from './components/footer';

function App() {
  let lastScroll = 0;
  window.onscroll = function (e) {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var nav = document.querySelector('nav');

    scrollY <= lastScroll
      ? nav.style.visibility = 'visible'
      : nav.style.visibility = 'hidden';

    lastScroll = scrollY;
  }
  return (
    <>

      <section className='text-white'>
        <section id='nav'>
          <Nav />
        </section>
        <section className='px-10 to-lightbgblue from-darkbgblue bg-gradient-to-t'
          id='Landing'>
          <Landing />
        </section>
        <div className="spacer layer1 bg-darkbgblue" />

        <section className='px-10 to-lightbgblue from-darkbgblue bg-gradient-to-t'
          id='About'>
          <About />
        </section>
        <div className="spacer layer1 bg-darkbgblue" />

        <section className='px-10 to-lightbgblue from-darkbgblue bg-gradient-to-t'
          id='Speakers'>
          <Speaker />
        </section>
        <div className="spacer layer1 bg-darkbgblue" />

        <section className='text-gray-800 px-10 to-lightbgblue from-darkbgblue bg-gradient-to-t'
          id='Workshops'>
          <Workshop />
        </section>
        <div className="spacer layer2 bg-darkbgblue" />

        <Footer />
      </section>
    </>
  );
}

export default App;
