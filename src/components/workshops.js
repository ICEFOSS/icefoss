import React, { Component } from "react";

export default class Workshop extends Component {
  render() {
    return (
      <div className=" py-40" id="Workshops">
        <h2 className="text-5xl my-10 ml-10 flex justify-center">Workshops</h2>
        <div className="flex flex-row flex-wrap justify-center gap-3">
          {/* <AboutEachSection
            title="WORKSHOP1"
            imgSrc="/assets/fisat.webp"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eius omnis libero excepturi odit pariatur, unde, expedita repudiandae dolorem sunt, harum architecto modi! Nam exercitationem aliquid architecto corrupti, iure vitae!"
            buttonn="Register"
          />
          <AboutEachSection
            title="WORKSHOP2"
            imgSrc="/assets/ffsc.png"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eius omnis libero excepturi odit pariatur, unde, expedita repudiandae dolorem sunt, harum architecto modi! Nam exercitationem aliquid architecto corrupti, iure vitae!"
            buttonn="Register"
          /> */}
          <ProblemEachSection
            id='0'
            title="Title"
            description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quis sit velit. Atque, ex! Maiores tempore quaerat repudiandae beatae quia veniam neque illo, enim nulla quisquam sint corrupti officia error?`}
            link="#"
          // function={this.scrollToAbout}
          />

          <ProblemEachSection
            id='1'
            title="Title"
            description={`
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quis sit velit. Atque, ex! Maiores tempore quaerat repudiandae beatae quia veniam neque illo, enim nulla quisquam sint corrupti officia error?`}
            link="#"
          // function={this.scrollToAbout}
          />
        </div>
      </div>
    );
  }
}

// export function AboutEachSection(props) {
//   return (
//     <div className="md:flex flex-wrap flex-row justify-evenly md:items-center bg-opacity-50 bg-white p-3 md:p-5 md:w-4/12 rounded-md my-6 lg:m-6 shadow-sm transition-shadow duration-1000 hover:shadow-xl   shadow-gray-700 hover:shadow-gray-700">
//       <div className="text-black flex flex-wrap flex-col md:flex-row justify-center">
//         <div className="lg:w-5/12 items-center text-black lg:mx-3 flex flex-col justify-center">
//           <img
//             className={`w-4xl mb-8 ${props.p}`}
//             src={props.imgSrc}
//             alt="photo"
//           />
//           <h3 className="text-4xl mb-5">{props.title}</h3>
//         </div>
//       </div>
//       <p className="mt-0 px-2 lg:max-w-full rounded-md bg-blend-saturation mb-10 text-lg ">
//         {props.desc}
//       </p>
//       <button className="bg-blue-400 font-bold hover:bg-white bg-opacity-40 p-2 w-60 rounded-3xl text-black flex flex-row justify-center">
//         {props.buttonn}
//       </button>
//     </div>
//   );
// }


function ProblemEachSection(props) {

  return (
    <>
      <div className="my-1 px-1 md:p-2 w-8/12 lg:w-5/12">
        <a className="relative block group h-[22rem] active:h-[22rem] hover:h-[22rem] focus:h-[22rem] md:h-[19rem] md:hover:h-[19rem]">

          <div className="relative flex items-end h-full transform bg-black bg-opacity-10 shadow-md shadow-black  rounded-xl transition-all duration-200">

            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">

              {(props.top == 'true') ? (
                <h2 className="mb-10 text-xl">
                  {props.title}
                </h2>
              ) : null}
              <div className="mb-8">
                {props.svg}
              </div>

              {(props.top != 'true') ? (
                <h2 className="mt-4 text-xl">
                  {props.title}
                </h2>
              ) : null}
            </div>

            <div className="absolute p-8 my-auto transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative flex flex-col justify-between">
              <h2 className="w-74 mt-4 text-2xl md:text-3xl font-medium">
                {props.title}
              </h2>

              <p className="mt-4 lg:text-md">
                {props.description}
              </p>

              <button className="bg-gray-400 font-bold p-2 w-fit bg-opacity-0 rounded-3xl text-black flex flex-row justify-center ml-auto mr-4">
                Register
              </button>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}