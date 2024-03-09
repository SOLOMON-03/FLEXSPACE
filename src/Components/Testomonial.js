import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { Worker } from "./Workers";

const Testomonial = () => {
    return (
        <div className="flex items-center justify-center flex-col h-[800px] bg-[#6c34af]">
            <h1 className="text-6xl font-bold text-white my-5 max-[376px]:text-xl" data-aos="zoom-in-up" data-aos-delay='50'
              data-aos-easing="ease-in-out" data-aos-duration="1000">Our Testomonial</h1>
            <Swiper
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 2,
                        spaceBetween: 200,
                      },
                      "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 100,
                      },
                      "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[100%] lg:max-w-[100%]"
            >
                {Worker.map((item) => (
                    <SwiperSlide key={item.name}>
                        <div
                        data-aos="fade-left"
                        data-aos-delay={item.delay}
                        data-aos-easing="ease-in-out" 
                        data-aos-duration="1000"
                        className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[450px] w-[280px] lg:h-[550px] lg:w-[350px] overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3">
                                <div className="flex self-center">
                                    <img src={item.image} alt='' className="text-blue-600 group-hover:text-blue-400 rounded-full object-cover w-[100px] h-[100px]" />
                                </div>
                                <h1 className="text-xl  text-blue-400 font-semibold text-center">{item.name} </h1>
                                <h2 className="text-xl  text-blue-400 font-light text-center max-[800px]:text-lg">{item.job}</h2>
                                <p className="lg:text-[18px] max-[799px]:text-sm">{item.description} </p>
                            </div>
                            <FontAwesomeIcon icon={faArrowTrendUp} className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testomonial;