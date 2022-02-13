import React, { Component } from "react";

export default class Workshop extends Component {
  render() {
    return (
      <div className=" py-40" id="Workshops">
        <h2 className="text-5xl mb-20 text-sky-200 flex justify-center">Workshops</h2>
        <div className="flex flex-row flex-wrap justify-center gap-3">
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

function ProblemEachSection(props) {

  return (
    <>
      <div className="my-1 px-1 md:p-2 w-full sm:w-10/12 md:w-7/12 lg:w-5/12">
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

            <div className="absolute p-8 my-auto transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:relative flex flex-col justify-between">
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