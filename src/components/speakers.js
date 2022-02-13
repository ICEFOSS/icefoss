import { Twitter_svg, Github_svg, Linkedin_svg, Instagram_svg } from "./constants";
export default function Speaker() {
    return (

        <>
            <div className="py-40" id="Speakers">

                <h2 className='text-5xl my-10 text-sky-200 text-center'>Speakers</h2>

                <div className="w-full">
                    <div className="my-6">
                        <div className="w-fit mx-auto bg-white bg-opacity-30 text-darkbgblue text-xl px-10 py-1 rounded-lg shadow-sm shadow-blue-900 mt-20 mb-4 hover:bg-opacity-70 transition-all duration-500">Guest Speaker</div>
                        <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-4 py-8">
                            <div className="flex flex-wrap flex-row justify-evenly gap-6 lg:mx-20 xl:mx-32">
                                <Speaker_card
                                    profile_img="https://th.bing.com/th/id/OIP.9KLizG3BPrxus1rmPG9jcAHaG1?w=236&h=218&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                                    name=""
                                    designation=""
                                    describe=""
                                    date=""
                                    time=""
                                    session_link=""
                                />

                            </div>
                        </section >
                    </div>
                    <div>
                        <div className="w-fit mx-auto bg-white bg-opacity-30 text-darkbgblue text-xl px-10 py-1 rounded-lg shadow-sm shadow-blue-900 mt-20 mb-4 hover:bg-opacity-70 transition-all duration-500">Other Speaker's</div>
                        <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-4  py-8">
                            <div className="flex flex-wrap flex-row justify-center gap-8  lg:mx-20 xl:mx-32">
                                <Speaker_card
                                    profile_img="https://th.bing.com/th/id/OIP.9KLizG3BPrxus1rmPG9jcAHaG1?w=236&h=218&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                                    name=""
                                    designation=""
                                    describe=""
                                    date=""
                                    time=""
                                    session_link=""
                                />
                                <Speaker_card
                                    profile_img="https://th.bing.com/th/id/OIP.9KLizG3BPrxus1rmPG9jcAHaG1?w=236&h=218&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                                    name=""
                                    designation=""
                                    describe=""
                                    date=""
                                    time=""
                                    session_link=""
                                />
                                <Speaker_card
                                    profile_img="https://th.bing.com/th/id/OIP.9KLizG3BPrxus1rmPG9jcAHaG1?w=236&h=218&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                                    name=""
                                    designation=""
                                    describe=""
                                    date=""
                                    time=""
                                    session_link=""
                                />
                            </div>
                        </section >
                    </div>
                </div >

            </div>
        </>
    );
}

export function Speaker_card(props) {
    return (
        <>
            <div className="max-w-sm border-[1px] border-sky-600 hover:bg-slate-100  hover:bg-opacity-20 rounded-sm hover:rounded-xl my-1 mx-1 w-80 sm:w-64  transition-all duration-1000 hover:shadow-lg bg-black bg-opacity-5 shadow-md shadow-black hover:shadow-gray-700 group">
                <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2 self-center">
                    <img className="my-3 w-40 md:w-40 rounded-md  shadow-gray-700 shadow-sm transition-shadow duration-700 hover:shadow-xl hover:shadow-gray-700 mx-auto" src={props.profile_img} alt="Bonnie image" />
                    <h3 className="text-3xl font-medium text-gray-900 text-center">{props.name}</h3>
                    <h4 className="text-lg text-gray-900 text-center">{props.designation}</h4>
                </div>
                <p className="flex flex-wrap flex-row justify-center pb-0 bg-black bg-opacity-10 group-hover:bg-white group-hover:bg-opacity-40 transition-all duration-100">
                    <Linkedin_svg />
                    <p className="mx-2" />
                    <Twitter_svg />
                    <p className="mx-2" />
                    <Instagram_svg />
                </p>
            </div>
        </>
    );
}