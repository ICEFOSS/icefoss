import './styles/App.css';
import About from './components/about';
import Speaker from './components/speakers';

function App() {
  return (
    <section className='text-white'>

      <section className='px-10 from-lightbgblue to-darkbgblue bg-gradient-to-b'>
        <About />
      </section>

      <section className='px-10 from-lightbgblue to-darkbgblue bg-gradient-to-b'>
        <Speaker />
      </section>
    </section>

  );
}

export default App;
