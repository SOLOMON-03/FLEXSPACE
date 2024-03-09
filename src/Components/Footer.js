import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faGoogle,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../Assets/Logo.png";
export const Footer = () => {
    return (
        <div className="bg-[#6c34af] text-white mt-10" data-aos="zoom-out-right" data-aos-delay="50" data-aos-easing='ease-in-out' data-aos-duration="1000">
            <div className="max-w-6xl mx-auto">
                <div>
                    <div className="flex justify-between p-3 max-[798px]:justify-center">
                        <div className="max-[798px]:hidden" data-aos="zoom-in-down" data-aos-delay="50" data-aos-easing='ease-in-out' data-aos-duration="1000">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <a href="#" className="me-4 text-reset" data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1000" data-aos-easing='ease-in-out'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" className="me-4 text-reset" data-aos="zoom-in-down" data-aos-delay="300" data-aos-duration="1000" data-aos-easing='ease-in-out'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#" className="me-4 text-reset" data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="1000" data-aos-easing='ease-in-out'>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="#" className="me-4 text-reset" data-aos="zoom-in-down" data-aos-delay="700" data-aos-duration="1000" data-aos-easing='ease-in-out'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="#" className="me-4 text-reset" data-aos="zoom-in-down" data-aos-delay="900" data-aos-duration="1000" data-aos-easing='ease-in-out'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="#" className="me-4 text-reset" data-aos="zoom-in-down" data-aos-delay="1100" data-aos-duration="1000" data-aos-easing='ease-in-out'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-wrap justify-around p-2 max-[798px]:flex-col">
                    <div className="p-3 ">
                        <div className="flex flex-col justify-center" data-aos="fade-up-right" data-aos-delay="100" data-aos-easing='ease-in-out' data-aos-duration="1000">
                            <img src={logo} alt="logo" className="cursor-pointer w-72 h-9 mb-3" />
                        </div>
                        <div className="w-96 max-[798px]:w-auto">
                            <form className="flex flex-col gap-2">
                                <input data-aos="fade-down" data-aos-delay="200" data-aos-easing='ease-in-out' data-aos-duration="1000" type="email" placeholder="Email address" className="p-1 outline-none bg-transparent border-b-2"/>
                                <textarea data-aos="fade-down" data-aos-delay="400" data-aos-easing='ease-in-out' data-aos-duration="1000" placeholder="Description" className="p-1 outline-none bg-transparent border-b-2 resize-none"/>
                                <button data-aos="fade-down" data-aos-delay="600" data-aos-easing='ease-in-out' data-aos-duration="1000" className="p-2 bg-white text-[#47294d] rounded-lg border hover:bg-[#7D00AE] cursor-pointer">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="flex self-center" data-aos="fade-left" data-aos-delay="100" data-aos-easing='ease-in-out' data-aos-duration="1000">
                        <iframe
                            key={1}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.526289598!2d76.76357851869749!3d28.64368463639647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1709887518395!5m2!1sen!2sin"
                            style={{border:0, width:'300px', height:'250px'}}
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="p-3">
                        <h6 data-aos="fade-down" data-aos-delay="100" data-aos-easing='ease-in-out' data-aos-duration="1000" className="text-uppercase fw-bold text-center text-[#fb35c5] mb-4">
                            Contact
                        </h6 >
                        <div className="flex flex-col gap-2 text-center">
                            <p data-aos="fade-down" data-aos-delay="300" data-aos-easing='ease-in-out' data-aos-duration="1000">
                                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                                Delhi, India.
                            </p >
                            <p data-aos="fade-down" data-aos-delay="500" data-aos-easing='ease-in-out' data-aos-duration="1000">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                info@example.com
                            </p>
                            <p data-aos="fade-down" data-aos-delay="600" data-aos-easing='ease-in-out' data-aos-duration="1000">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                + 01 234 567 88
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="text-center p-4" >
                        © 2024 Copyright :
                        <a className="text-reset fw-bold" href="" >
                            &nbsp;Flexspace.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
