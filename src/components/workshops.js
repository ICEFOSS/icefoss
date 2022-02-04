import React, { Component } from "react";

export default class Workshop extends Component {
  render() {
    return (
      <div id="Workshops" className="mt-10 md:mt-10">
        <h2 className="text-5xl ml-10 flex justify-center">Workshop</h2>
        <div className="flex flex-row flex-wrap  py-4 sm: justify-center">
          <AboutEachSection
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
          />
        </div>
      </div>
    );
  }
}

export function AboutEachSection(props) {
  console.log(props);
  return (
    <div className="md:flex flex-wrap flex-row justify-evenly md:items-center bg-opacity-50 bg-white p-3 md:p-5 md:w-4/12 rounded-md my-3 lg:m-6 shadow-sm transition-shadow duration-1000 hover:shadow-xl   shadow-gray-700 hover:shadow-gray-700">
      <div className="text-black flex flex-wrap flex-col md:flex-row justify-center">
        <div className="lg:w-5/12 items-center text-black lg:mx-3 flex flex-col justify-center">
          <img
            className={`w-4xl mb-8 ${props.p}`}
            src={props.imgSrc}
            alt="photo"
          />
          <h3 className="text-4xl mb-5">{props.title}</h3>
        </div>
      </div>
      <p className="mt-0 px-2 lg:max-w-full rounded-md bg-blend-saturation mb-10 text-lg ">
        {props.desc}
      </p>
      <button className="bg-blue-400 font-bold hover:bg-white bg-opacity-40 p-2 w-60 rounded-3xl text-black flex flex-row justify-center">
        {props.buttonn}
      </button>
    </div>
  );
}
