import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            // <div className="py-40">
            //     <h2 className='text-5xl text-center' id='About'>About</h2>
            <section className="text-gray-200">
                <div className="sm:px-5 py-24 w-full">
                    <h2 className='text-5xl text-center mb-10' id='About'>About</h2>
                    {/* <div className="flex flex-wrap -mx-4 -mb-10 text-center"> */}
                    <div className=" flex flex-wrap flex-row justify-center gap-8">
                        <AboutEachSection
                            imgSrc='/assets/fisat.png'
                            title="FISAT"
                            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eius omnis libero excepturi odit pariatur, unde, expedita repudiandae dolorem sunt, harum architecto modi! Nam exercitationem aliquid architecto corrupti, iure vitae!"
                        />
                        <AboutEachSection
                            imgSrc='/assets/ffsc.png'
                            title="FFSC"
                            hide='hidden'
                            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eius omnis libero excepturi odit pariatur, unde, expedita repudiandae dolorem sunt, harum architecto modi! Nam exercitationem aliquid architecto corrupti, iure vitae!"
                        />
                        <AboutEachSection
                            imgSrc='/assets/hackfit.png'
                            title="Hackfit"
                            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eius omnis libero excepturi odit pariatur, unde, expedita repudiandae dolorem sunt, harum architecto modi! Nam exercitationem aliquid architecto corrupti, iure vitae!"
                        />
                    </div>
                </div>
            </section >
        )
    }
}

export function AboutEachSection(props) {
    const aboutStyle = `w-fit rounded-md px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-opacity-0 ${props.hide}`
    return (

        <div className="max-w-xs overflow-hidden  flex flex-col justify-start rounded-lg shadow-xl hover:shadow-xl group">
            <div className='group-hover:-translate-y-1 transform bg-gray-700 bg-opacity-0 group-hover:bg-opacity-5 shadow-sm group-hover:shadow-lg group-hover:shadow-sky-700 shadow-sky-900  rounded-lg transition-all duration-100 w-full mx-auto border-[1px] border-sky-600'>
                <img className="w-full" src={props.imgSrc} alt="Forest" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.desc}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className=" flex justify-end"><button className={aboutStyle}>website</button></span>
            </div>
        </div>
    )
}