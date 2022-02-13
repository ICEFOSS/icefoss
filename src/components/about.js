import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            // <div className="py-40">
            //     <h2 className='text-5xl text-center' id='About'>About</h2>
            <section className="text-gray-200">
                <div className="container sm:px-5 py-24 mx-auto">
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

        <div className="max-w-md overflow-hidden  flex flex-col justify-start rounded-2xl shadow-lg shadow-black group">
            <div className='group-hover:-translate-y-1 transform bg-gray-700 bg-opacity-0 group-hover:bg-opacity-5 shadow-sm group-hover:shadow-lg group-hover:shadow-black shadow-black  rounded-2xl transition-all duration-200 w-[99%] mx-auto mt-1'>
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