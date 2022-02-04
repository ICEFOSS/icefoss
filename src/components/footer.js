import { Linkedin_svg, Twitter_svg, Instagram_svg, Facebook_svg } from "./constants"
export default function Footer() {
    return (
        <div className="from-lightbgblue to-blue-900 bg-gradient-to-b flex justify-center">
            <footer className="text-center text-white bg-black bg-blend-hue bg-opacity-60 w-full flex justify-center pt-5">
                <div className="container px-6 pt-6">
                    <div className="container px-8 h-[35rem] h- md:h-[32rem] pb-6 mx-auto flex flex-nowrap flex-col md:flex-row">

                        <ContactSec />
                        <div className="w-full mt-8 bg-gray-100 opacity-70 rounded-lg overflow-hidden p-1 flex relative ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.3671449790004!2d76.40663386471358!3d10.23194389269231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08068aa17bd247%3A0xf048b9ebcbd2af28!2sFederal%20Institute%20of%20Science%20And%20Technology%20(FISAT)%C2%AE!5e0!3m2!1sen!2sin!4v1643976276450!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0" loading="lazy"></iframe>

                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto mt-6">
                        {/* <h2 className="text-3xl font-semibold leading-9 tracking-tight text-brochwhite sm:text-4xl sm:leading-10">Contact</h2> */}
                        {/* <div className="hidden md:block">
                        </div> */}
                        <div className="social-media">
                            <div className="flex justify-center items-center space-x-6">
                                <a href="" target="blank" rel="noreferrer" aria-label="Twitter" className="text-blue-500">
                                    <Twitter_svg />
                                </a>

                                <a href="" target="blank" rel="noreferrer" aria-label="Linkedin" className="text-gray-900">
                                    <Linkedin_svg />
                                </a>
                                <a href="" target="blank" rel="noreferrer" aria-label="Instagram" className="text-pink-500 md:mt-0 mt-2">
                                    <Instagram_svg />
                                </a>
                                <a href="" target="blank" rel="noreferrer" aria-label="Facebook" className="text-blue-500 sm:mt-0 mt-2">
                                    <Facebook_svg />
                                </a>
                            </div>
                        </div>
                        <div className="text-center text-xs md:text-sm bg container px-6 mt-3 py-4 font-sans w-full">
                            Created & designed
                            <span> Amarjith Raj, </span>
                            <span> Aparna Joshi, </span>
                            <span> Ashmi Subramanian </span>
                            &amp;
                            <span> Joel Nickson </span>
                            <br></br>
                            <div className="my-6">
                                <span className=" font-serif">&copy;</span> 2022 Icefoss
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export function ContactSec() {
    return (
        <div className=" flex flex-col md:flex-row flex-grow flex-wrap  md:mr-10 justify-center items-center  bg-gray-50 bg-opacity-70 mt-8 rounded-lg px-5 content-center gap-3 ">
            <div className="flex flex-col md:flex-row flex-wrap justify-center shadow-sm bg-gray-500 bg-opacity-60 shadow-gray-600 w-full mx-4 rounded-md">
                <div className="Venue m-2">
                    <h3 className="text-black text-lg md:text-xl font-normal underline underline-offset-4 pb-2">Mobile</h3>
                    <p className="max-w-xs mx-auto text-xs md:text-sm font-mono text-gray-900">
                        Kajal : +91 90619 11103
                    </p>
                    <p className="max-w-xs mx-auto text-xs md:text-sm font-mono text-gray-900">
                        Naveen : +91 86063 30293
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center text-center  bg-gray-500 bg-opacity-60 shadow-sm shadow-gray-600 w-full mx-4 rounded-md">
                <div className="Venue m-2">
                    <h3 className="text-black text-lg md:text-xl  font-normal underline underline-offset-4 pb-2">Venue</h3>
                    <p className="max-w-xs mx-auto text-xs md:text-sm font-normal text-gray-900">
                        Federal Institute of Science And Technology - Hormis Nagar, Mookkannoor, Angamaly, Kerala 683577
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-center  bg-gray-500 bg-opacity-60  shadow-sm shadow-gray-600 w-full mx-4 rounded-md">
                <div className="Venue m-2">
                    <h3 className="text-black text-lg md:text-xl  font-normal underline underline-offset-4 pb-2">Email</h3>
                    <p className="max-w-lg mx-auto text-xs md:text-sm font-normal text-gray-900">
                        icefoss<span className=" font-serif">@</span>fisat.ac.in
                    </p>
                </div>
            </div>

        </div>
    );
}