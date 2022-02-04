import './styles/App.css';
import About from './components/about';
import Speaker from './components/speakers';
import Landing from './components/landing';
import Nav from './components/nav';
import Workshop from './components/workshops';
import {Bubble_svg} from './components/constants'
import Footer from './components/footer';

function App() {
  return (
    <><section>
      <Nav />
    </section>
    <section className='mx-10  text-gray-800'>
        <Landing />
     </section>
     <div className='flex justify-center w-full overflow-hidden'>
          
          <Bubble_svg />
        </div>
      
     <section className='mx-10 md:mt-10 mt-28 text-gray-800'> 
        <About />
      </section>
      <div className='flex justify-center w-full mx-0'>
          <Bubble_svg />
        </div>
        <section className='mx-10 md:mt-10 mt-28 text-gray-800'>
        <Speaker />
        </section>
        <div className='flex justify-center w-full'>
          <Bubble_svg />
        </div>
        <section className='mx-10 md:mt-10 mt-28 text-gray-800'>
        <Workshop />
        </section>
         <Bubble_svg />
         <Footer />
        </> 
  );
}

export default App;
