import LazyLoad from 'react-lazyload';
import '../styles/snowfall.css';
import Snowfall from './snowfall';

export default function Landing() {
  return (
    <>
      <LazyLoad height={300} offset={300} once>
        <Snowfall />
      </LazyLoad>
      <section className="ml-0  duration-200 h-fit" id="Landing">
        <div className="bg-bgblue animate-[wiggle_90s_scroll_infinite_linear] h-screen flex justify-items-center items-center md:justify-center lg:justify-start">
          <div className="px-2  mt-36  lg:pl-44">
            <h1 className="text-6xl font-semibold font-mono mb-6">
              <span className="text-gray-800">ICEFOSS</span> <br />
              <span className="text-gray-100">28TH - 30TH APR 2022</span>
            </h1>
            <p className="text-lg max-w-md mb-8 text-gray-800">
              ICEFOSS is a Free Software Conference organized by FISAT Free Software Cell (FFSC) aiming all FOSS enthusiast's and others. ICEFOSS 2022, scheduled on April 28th-30th is the 12th edition of this conference.
            </p>
            <div>
              <p className='pl-3 mb-2 text-blue-900'>Registration links:</p>
              <div className="max-w-md grid grid-flow-col">
                <a href='#Workshops'>
                  <button className=" inline-block mt-3 px-8 py-3 bg-gray-800 text-lg text-white rounded-md">
                    WORKSHOP
                  </button>
                </a>

                <a href="http://hackfit.fisat.ac.in/" target="blank">
                  <button className="w-40 inline-block mt-3 px-8 py-3 bg-gray-800 text-lg text-white rounded-md">
                    HACKATHON
                  </button>
                </a>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}
