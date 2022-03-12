import React, { Component } from "react";
import { Hacking, ROS } from "./workshopsSvg";

export default class Workshop extends Component {
  render() {
    return (
      <div className=" py-20" id="Workshops">
        <h2 className="text-5xl mb-20 text-gray-100 flex justify-center">Workshops</h2>
        <div className="flex flex-row flex-wrap justify-center gap-3">
          <WorkshopEachSection
            id='1'
            title="Robot Operating System (ROS)"
            description={`
            <p>ROS is an open-source, meta-operating system for your robot - a flexible framework for writing robot software,  a collection of tools, libraries, and convention to simplify the task of creating complex and robust robot behavior across a wide variety of robotic platforms.</p>
            <br>
            <p>The workshop will introduce you to RoS, how to use it and provide hands on training.</p>
            `}
            svg={ROS}
            link="#"
          // function={this.scrollToAbout}
          />

          <WorkshopEachSection
            id='2'
            title="Cyber Security and Ethical Hacking"
            description={`
            <p>The event will touch on the following:</p>
            <br>
            <p>Exploring basic Kali Linux tools, Tryhackme and online tools. </p>
            <br>
            <p>Get an idea about CTF challenges and perform a system/android level hacking.</p>
            <br>
            <p>Introduction to VAPT, web hacking and how to submit bug bounty reports with discussions about pentesterlabs</p>
            <br>
            <p>Introduction to SOC, how to fetch logs from servers and a deep dive into OSINT Tools, HTB, Tryhackme, and pentester labs.</p>
            <br>
            <p>Completing the SPLUNK fundamentals, project discussions, how to stay in the field with just bug bounties.</p>
            <br>
            <p>Conclusion with how to explore Linkedin for better learning insights.         </p>
            <br>           
            `}
            svg={Hacking}
            link="#"
          // function={this.scrollToAbout}
          />
        </div>
      </div>
    );
  }
}

function WorkshopEachSection(props) {

  return (
    <>
      <div id={`workshop${props.id}`} className="my-1 px-1 md:p-2 w-full sm:w-10/12 md:w-7/12 lg:w-5/12">
        <div className="relative block group h-[22rem] active:h-[22rem] hover:h-[22rem] focus:h-[22rem] md:h-[24rem] md:hover:h-[24rem]">

          <div className="relative flex items-end h-full transform overflow-hidden group-hover:overflow-y-scroll from-[#1ca2fc] via-[#1ca2fc]  to-[#1c5982]  bg-gradient-to-tl  shadow-md shadow-black  rounded-xl transition-all duration-1000">

            <div className="px-8 pb-8 transition-opacity hover:opacity-0 group-hover:hidden  mx-auto w-fit">

              <div className="mb-8">
                {props.svg}
              </div>

              <h2 className="mt-4 text-xl">
                {props.title}
              </h2>
            </div>

            <div className="absolute p-8 my-auto transition-all opacity-0 group-hover:opacity-100 group-hover:relative flex flex-col justify-between">
              <h2 className="w-74 mt-4 text-2xl md:text-3xl font-medium">
                {props.title}
              </h2>

              <p className="mt-4 lg:text-md"
                dangerouslySetInnerHTML={{ __html: props.description }}
              />

              <button className="bg-gray-400 font-bold p-2 w-fit bg-opacity-0 rounded-3xl text-black flex flex-row justify-center ml-auto mr-4">
                Register
              </button>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}