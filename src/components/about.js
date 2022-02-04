import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return <>
            <h2 className='text-5xl my-10 ml-10' id='About'>About</h2>
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
        </>;
    }
}

export function AboutEachSection(props) {
    return (
        <div className='bg-opacity-50 bg-white p-3 lg:p-10  rounded-md mt-7  '>
            <div className='text-black flex flex-wrap flex-col md:flex-row justify-center'>
                <div className={`lg:w-5/12 mt-4 mb-10 w-fit bg-blue-400 bg-opacity-40 rounded-lg saturate-150 customname`}>
                    <img className={`aspect-auto rounded-lg ${props.p} shadow-slate-600 shadow-lg`} src={props.imgSrc} alt='photo' />
                </div>
                <div className='lg:w-6/12 items-center text-black lg:mx-3 flex flex-col justify-center'>
                    <h3 className='text-4xl'>{props.title}</h3>
                    <p className='mt-3 px-2 lg:text-center rounded-md bg-blend-saturation'>
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}