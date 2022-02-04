import { Linkedin_svg, Twitter_svg, Instagram_svg, Facebook_svg } from "./constants"
export default function Footer() {
    return (
        <div className=" bg-blue-900 bg-opacity-60 flex justify-center">
            <footer class="text-center text-white ">
                <div className="container px-6 pt-6">
                    <div className="max-w-3xl mx-0 space-y-6">
                        {/* <h2 className="text-3xl font-semibold leading-9 tracking-tight text-brochwhite sm:text-4xl sm:leading-10">Contact</h2> */}

                        <div className="mt-8 flex flex-col md:flex-row flex-grow flex-wrap sm:gap-x-8 justify-evenly">
                            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                                <div className="Venue m-2">
                                    <h3 className="text-white text-lg font-normal underline underline-offset-4 pb-2">Mobile</h3>
                                    <p className="max-w-xs mx-auto text-xs font-mono text-gray-200">
                                    Lorem :ipsum dolor
                                    </p>
                                    <p className="max-w-xs mx-auto text-xs font-mono text-gray-200">
                                    Lorem :ipsum dolor
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row flex-wrap justify-center text center">
                                <div className="Venue m-2">
                                    <h3 className="text-white text-lg font-normal underline underline-offset-4 pb-2">Venue</h3>
                                    <p className="max-w-xs mx-auto text-xs font-normal text-gray-200">
                                        Federal Institute of Science And Technology - Hormis Nagar, Mookkannoor, Angamaly, Kerala 683577
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                                <div className="Venue m-2">
                                    <h3 className="text-white text-lg font-normal underline underline-offset-4 pb-2">Email</h3>
                                    <p className="max-w-lg mx-auto text-xs font-normal text-gray-200">
                                        icefoss<span className=" font-serif">@</span>fisat.ac.in
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="social-media">
                            <div className="flex justify-center space-x-6">
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
                        <div class="text-center text-xs p-4 bg container px-6 pt-6 font-sans w-full">
                        Created & designed by Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                       <br></br>
                        <span className=" font-serif">&copy;</span> 2022 Icefoss
                        </div>
                        
                    </div>
                </div>
               
            </footer>
        </div>
    )
}