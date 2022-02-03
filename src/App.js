import './styles/App.css';
import About from './components/about';
import Speaker from './components/speakers';
import Footer from './components/footer';
function App() {
  return (
   <>
   
   <section className='mx-10  text-white'>
      
      <About />
      <Speaker />

     
    </section>
    <section>
       <Footer/>
    </section>
    
    </>

  );
}

export default App;
