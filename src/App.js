import './styles/App.css';
import About from './components/about';
import Speaker from './components/speakers';
import Landing from './components/landing';
import Nav from './components/nav';
import Workshop from './components/workshops';
import "./styles/App.css";
import Footer from './components/footer';
import LazyLoad from 'react-lazyload';

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

      <section className='text-white w-fit sm:w-full'>
        <section id='nav'><LazyLoad height={300} offset={300} once>
          <Nav />
        </LazyLoad>
        </section>
        <section className='px-10 from-darkbgblue via-[#1ca2fc] to-lightbgblue bg-gradient-to-t'
          id='Landing'><LazyLoad height={300} offset={300} once>
            <Landing />
          </LazyLoad>
        </section>
        <div className="spacer layer1 bg-darkbgblue" />

        <section className='px-10 from-darkbgblue to-lightbgblue bg-gradient-to-t'
          id='About'><LazyLoad height={300} offset={300} once>
            <About />
          </LazyLoad>
        </section>
        <div className="spacer layer1 bg-darkbgblue" />

        <section className='px-10 from-darkbgblue to-lightbgblue bg-gradient-to-t'
          id='Speakers'><LazyLoad height={300} offset={300} once>
            <Speaker />
          </LazyLoad>
        </section>
        <div className="spacer layer1 bg-darkbgblue" />

        <section className='text-gray-800 px-10 from-darkbgblue to-lightbgblue bg-gradient-to-t'
          id='Workshops'><LazyLoad height={300} offset={300} once>
            <Workshop />
          </LazyLoad>
        </section>
        <div className="spacer layer2 bg-darkbgblue" />
        <LazyLoad height={300} offset={300} once>
          <Footer />
        </LazyLoad>
      </section>
    </>
  );
}

export default App;
