import React from 'react'
<<<<<<< HEAD
import Testomonial from '../Components/Testomonial'

export const About = () => {
  return (
    <div>
      <Testomonial />
=======
import img from "../Assets/about.jpg"
import './about.css'
export const About = () => {
  return (
    <div className='about-content' >
      <img style={{width:'100%', height:'450px'}}src={img} alt='image'/>
      <h1 className='centered'>About Us</h1>
      <div className="mt-[50px] text-center max-w-4xl mx-auto">
        <h4 className="text-4xl text-orange-500">COWORKING SPACE IN  DELHI</h4>
        <div className="">
        <p className="text-[20px] mt-3 text-justify">Flexspace provides excellent office spaces to their clients. The strategic positioning of Flexspace, Hargobind Enclave can be summed up as follows: 400 meters from Karkardooma metro station, on main Vikas Marg, 25 minutes from Connaught place, 20 minutes from Noida, 2 minutes from Energy gym and surrounded by variety of offices and eateries.
        Flexspace, Delhi at Hargobind Enclave is a place for hardcore business community of entrepreneurs in  Delhi.</p>
        </div>
        {/* <h1>eew</h1> */}
      </div>
>>>>>>> 2b18c87dba0d1085673ab1e2dbe058a17a805ea9
    </div>
  )
}
