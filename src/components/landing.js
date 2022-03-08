import '../styles/snowfall.css';
import Snowfall from './snowfall';

// export function Snow(){
//   let snowArray =[]
//   return(
//     for (let i = 0; i < 400; i++) {
//       snowArray;

//     }
//   )
// } 
export default function Landing() {
  return (
    <>
      <Snowfall />
      <section className="ml-0  duration-200" id="Landing">
        <div className="bg-bgblue animate-[wiggle_90s_scroll_infinite_linear] h-screen flex justify-items-center items-center md:justify-center lg:justify-start">
          <div className="px-2  mt-36  lg:pl-44">
            <h1 className="text-6xl font-semibold font-mono mb-6">
              <span className="text-gray-800">ICEFOSS</span> <br />
              <span className="text-gray-100">28TH - 30TH APR 2022</span>
            </h1>
            <p className="text-lg max-w-md text-gray-800">
            ICEFOSS is a Free Software Conference organized by FISAT Free Software Cell (FFSC) aiming all FOSS enthusiast's and others. ICEFOSS 2022, scheduled on April 28th-30th is the 12th edition of this conference. 
            </p>
            <div className="flex flex-col md:flex-row gap-x-3">
              <button className="inline-block mt-10 px-10 py-3 bg-gray-800 text-lg text-white rounded-md">
                REGISTER NOW
              </button>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}
