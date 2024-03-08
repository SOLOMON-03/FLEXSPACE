import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect} from 'react'

const SliderComponent = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
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
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-500'></div>
            <Arrow direction="left" />
            <Arrow direction="right" />
        </div>
    );
}
export default SliderComponent;