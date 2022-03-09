import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            // <div className="py-40">
            //     <h2 className='text-5xl text-center' id='About'>About</h2>
            <section className="text-gray-100">
                <div className="sm:px-5 py-24 w-full">
                    <h2 className='text-5xl text-center mb-10' id='About'>About</h2>
                    {/* <div className="flex flex-wrap -mx-4 -mb-10 text-center"> */}
                    <div className=" flex flex-wrap flex-row justify-center gap-8 text-sky-200">
                        <AboutEachSection
                            href="https://fisat.ac.in/"
                            imgSrc='/assets/fisat.png'
                            title="FISAT"
                            desc="Federal Institute of Science And Technology (FISAT) was established in 2002 under the aegis of Federal Bank Officers' Association Educational Society (FBOAES). The college has carved a niche for itself in education world, eloquently demonstrated by the flying colors attained by its students in academics, placements as well as in extra curricular and co-curricular activities."
                        />
                        <AboutEachSection
                            imgSrc='/assets/ffsc.png'
                            title="FFSC"
                            hide='hidden'
                            desc="The FISAT Free Software Cell (FFSC), established in 2006, is dedicated to promote computer users` rights to use, study, copy, modify, and redistribute computer programs. The FFSC promotes the developmentand use of free software, particularly the GNU operating system, used widely in its GNU/Linux variant. The Free Software Cell is one of the most active student organisations operating in FISAT. FFSC now conducts classes in the GNU/Linux operating system, kernel programming and Web application development."
                        />
                        <AboutEachSection
                            href="http://hackfit.fisat.ac.in/"
                            imgSrc='/assets/hackfit.png'
                            title="Hackfit"
                            desc="HACKFIT is a 36-hour Hackathon conducted as part of ICEFOSS 2022 commencing from the 28th of April 2022 to the 30th of April 2022. Participants can enter the competition individually or as a team of not more than 5 members. The Hackathon will have 2 rounds with round 1 being exclusively online. Qualifiers of the first round will be assigned a mentor to progress to the second round. The winning team along with the 2 runners up teams will be offered an opportunity to connect with some of our leading industry partners."
                        />
                    </div>
                </div>
            </section >
        )
    }
}

export function AboutEachSection(props) {
    const aboutStyle = `w-fit px-3 text-sm font-semibold text-black mr-2 mb-2 bg-opacity-0 ${props.hide}`
    return (
        <div className="max-w-xs overflow-hidden  flex flex-col justify-start from-lightbgblue to-darkbgblue bg-gradient-to-t rounded-lg shadow-xl hover:shadow-xl group">
            <div className='group-hover:-translate-y-1 transform from-lightbgblue to-[#1493c9] bg-gradient-to-b  group-hover:bg-opacity-5 shadow-sm group-hover:shadow-lg group-hover:shadow-sky-700 shadow-sky-900  rounded-lg transition-all duration-100 w-full mx-auto border-[1px] border-sky-600'>
                <img className="w-full" src={props.imgSrc} alt="Forest" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.desc}
                </p>
            </div>
            <div className="px-6 pt-1 pb-2 h-full flex justify-end items-end">
                <span className=" ">
                    <a href={props.href} target="_blank" role="button" className={aboutStyle} rel="noreferrer">website</a>
                </span>
            </div>
        </div>
    )
}