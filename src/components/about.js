import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="py-40">
                <h2 className='text-5xl text-center' id='About'>About</h2>
                <AboutEachSection
                    imgSrc='/assets/fisat.webp'
                    title="FISAT"
                    desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eius omnis libero excepturi odit pariatur, unde, expedita repudiandae dolorem sunt, harum architecto modi! Nam exercitationem aliquid architecto corrupti, iure vitae!"
                />
                <AboutEachSection
                    imgSrc='/assets/ffsc.png'
                    p='px-16 py-6 md:px-52 md:py-12 lg:px-20'
                    title="FFSC"
                    desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eius omnis libero excepturi odit pariatur, unde, expedita repudiandae dolorem sunt, harum architecto modi! Nam exercitationem aliquid architecto corrupti, iure vitae!"
                />
                <br />
                <br />
            </div>
        )
    }
}

export function AboutEachSection(props) {
    return (
        <div className='bg-opacity-50 bg-white shadow-sm shadow-black p-3 lg:p-10 rounded-md mt-6 lg:m-6'>
            <div className='text-black flex flex-wrap flex-col md:flex-row justify-around w-full'>
                <h3 className='text-4xl text-center lg:hidden block'>{props.title}</h3>
                <div className={`xl:w-6/12 mt-4 mb-10 w-fit from-blue-400 to-sky-300 bg-gradient-to-br bg-opacity-10 shadow-sm shadow-blue-300 rounded-lg saturate-150 customname mx-6`}>
                    <img className={`aspect-auto rounded-lg ${props.p} shadow-slate-600 shadow-sm h-full`} src={props.imgSrc} alt='photo' />
                </div>
                <div className='xl:w-5/12 items-center text-black lg:mx-3 flex flex-col justify-center'>
                    <h3 className='text-4xl hidden lg:block'>{props.title}</h3>
                    <p className='mt-3 px-2 lg:text-center rounded-md bg-blend-saturation'>
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}