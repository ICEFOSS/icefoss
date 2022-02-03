import './styles/App.css';
import About from './components/about';
import Speaker from './components/speakers';
import Landing from './components/landing';
import Nav from './components/nav';

function App() {
  return (
    <><section>
      <Nav />
    </section>
    <section className='mx-10  text-gray-800'>
        <Landing />
     </section>
     <section className='mx-10 md:mt-10 mt-28 text-gray-800'>   
        <About />
        <Speaker />
      </section></>

  );
}

export default App;
