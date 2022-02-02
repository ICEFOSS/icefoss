import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return <>
            <h2 className='text-5xl my-10 ml-10'>About</h2>
            <AboutEachSection
                imgSrc='/assets/ffsc.png'
                padding='20'
                title="FFSC"
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eius omnis libero excepturi odit pariatur, unde, expedita repudiandae dolorem sunt, harum architecto modi! Nam exercitationem aliquid architecto corrupti, iure vitae!"
            />
            <AboutEachSection
                imgSrc='/assets/fisat.webp'
                title="FISAT"
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eius omnis libero excepturi odit pariatur, unde, expedita repudiandae dolorem sunt, harum architecto modi! Nam exercitationem aliquid architecto corrupti, iure vitae!"
            />
        </>;
    }
}

export function AboutEachSection(props) {
    return (
        <div className='bg-opacity-20 bg-gray-300 p-10 rounded-md m-6'>
            <div className='text-black flex flex-wrap flex-row justify-center'>
                <div className={`lg:w-5/12 my-3 lg:mr-9 p-${props.padding} bg-white bg-opacity-20 rounded-lg`}>
                    <img className='aspect-auto rounded-lg' src={props.imgSrc} alt='' />
                </div>
                <div className='lg:w-6/12 items-center text-white lg:mx-3 flex flex-col justify-center'>
                    <h3 className='text-4xl'>{props.title}</h3>
                    <p className='mt-3 text-center rounded-md'>
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}