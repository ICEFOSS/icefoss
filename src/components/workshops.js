import React, { Component } from "react";
import { Hacking, ROS } from "./workshopsSvg";

export default class Workshop extends Component {
  render() {
    return (
      <div className=" py-40" id="Workshops">
        <h2 className="text-5xl mb-20 text-sky-200 flex justify-center">Workshops</h2>
        <div className="flex flex-row flex-wrap justify-center gap-3">
          <WorkshopEachSection
            id='1'
            title="Robot Operating System (ROS)"
            description={`
            <br>            
            <p>Day 1 : Will have a 🔥 chat session with resources, collecting the ideas and potential, which they have.
            Get some feedback about their expectation about the intership.
            Starts of by making a motivation to the domain from basics to a professional exposure.
            Will discuss about certifications which firm's offers and that can create an impact in job search.
            Start of with basic Kali Linux tools.</p>
            <br>            
            <p>Day 2 : Explore more Kali Linux tools, HTB, Tryhackme and online tools. Get an idea about CTF challenges and the relevance of that. Perform a system/android level hacking.</p>
            <br>                        
            <p>Day 3: Introduction to VAPT, how to perform web hacking(XSS, CSRF, IDOR...etc).How to submit bug bounty reports etc. Discussions about pentesterlabs and other learning resources.</p>
            <br>                        
            <p>Day 4: Introduction to SOC, how to fetch log from servers, how to analyse them. Deep dive into OSINT Tools.</p>
            <br>                        
            <p>Day 5: Completing the SPLUNK fundamentals. Deepdive  into HTB, TRYHACKME, PENTESTERLABS.</p>
            <br>                        
            <p>Day 6: Project discussions, how to get a job in this field. How to sustain in this field with just bug bounty. Linkedin in exploration for best learning insights. Free learning materials and paid learning materials discussions.</p>
            <br>            
            `}
            svg={ROS}
            link="#"
          // function={this.scrollToAbout}
          />

          <WorkshopEachSection
            id='2'
            title="Cyber Security and Ethical Hacking"
            description={`
            <br>            
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quis sit velit. Atque, ex! Maiores tempore quaerat repudiandae beatae quia veniam neque illo, enim nulla quisquam sint corrupti officia error?
            <br>           
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

          <div className="relative flex items-end h-full transform overflow-hidden group-hover:overflow-y-scroll bg-black bg-opacity-10 shadow-md shadow-black  rounded-xl transition-all duration-1000">

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