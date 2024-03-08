import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect} from 'react'
import office1 from '../Assets/office1.jpg'
import office2 from '../Assets/office2.jpg'
import office3 from '../Assets/office3.jpg'
import office4 from '../Assets/office4.jpg'
import office5 from '../Assets/office5.jpg'
import office6 from '../Assets/office6.jpg'
import office7 from '../Assets/office7.jpg'
import office8 from '../Assets/office8.jpg'
import office9 from '../Assets/office9.jpg'
import office10 from '../Assets/office10.jpg'
import office11 from '../Assets/office11.jpg'
import office12 from '../Assets/office12.jpg'
import office13 from '../Assets/office13.jpg'
import office14 from '../Assets/office14.jpg'
import office15 from '../Assets/office15.jpg'

const SliderComponent = () => {
    const slides = [
        {
            url: office1,
        },
        {
            url: office2,
        },
        {
            url: office3,
        },
        {
            url: office4,
        },
        {
            url: office5,
        },
        {
            url: office6,
        },
        {
            url: office7,
        },
        {
            url: office8,
        },
        {
            url: office9,
        },
        {
            url: office10,
        },
        {
            url: office11,
        },
        {
            url: office12,
        },
        {
            url: office13,
        },
        {
            url: office14,
        },
        {
            url: office15,
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(1);
    useEffect(()=>{
        const autoPlay = setInterval(()=>{
            nextSlide()
        },2000)
        return ()=> clearInterval(autoPlay)
    },[currentIndex])

    const prevSlide = () => {
        setCurrentIndex((prevIndex)=>prevIndex === 0 ? slides.length-1 : prevIndex - 1);
    };
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex)=> prevIndex === slides.length-1 ?  0: prevIndex + 1);
    };
    const Arrow =({direction}) => {
        return <div className='md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 text-white  bg-[#764c9b]'
            style={{[direction]:"20px"}}>
                { direction === "left" ?
                (<FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} size={30} />)
                :
                (<FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} size={30} />)
                }
            </div>
    }
    return (
        <div className='max-w-screen h-[680px] w-full m-auto py-16 relative group max-md:h-[480px] cursor-pointer'>    
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})`, objectFit: 'cover' }}
                className='w-full h-full bg-center bg-cover duration-500'></div>
            <Arrow direction="left" />
            <Arrow direction="right" />
        </div>
    );
}
export default SliderComponent;