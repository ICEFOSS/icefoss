import './styles/App.css';
import About from './components/about';
import Speaker from './components/speakers';

import Workshop from './components/workshops';

function App() {
  return (
    <section className='mx-10  text-white'>
      <About />
      <Speaker />
      <Workshop />
    </section>

  );
}

export default App;
