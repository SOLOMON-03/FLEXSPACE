import React from 'react'
import bg from "./../Assets/DelhiBg.jpg"
import men from "./../Assets/Men1.jpg"
const Location1 = () => {
  return (
    <div>
      <img src={bg}  className="h-[400px] object-cover w-screen"/>
      <h4 className="absolute top-[300px]   ml-[560px] text-6xl" style={{color:"#5E0094"}}>Bangalore</h4>
      <img src={men} className="top-[300px] ml-[230px] h-[320px] w-[300px] object-cover absolute shadow-[5px_5px_10px_#000000] " />
      <div className="mt-[200px] text-center max-w-4xl mx-auto">
        <h4 className="text-4xl text-orange-500">COWORKING SPACE IN  Bangalore</h4>
        <div className="">
        <p className="text-[20px] mt-3 text-justify">Flexspace provides excellent office spaces to their clients. The strategic positioning of Flexspace, Hargobind Enclave can be summed up as follows: 400 meters from Karkardooma metro station, on main Vikas Marg, 25 minutes from Connaught place, 20 minutes from Noida, 2 minutes from Energy gym and surrounded by variety of offices and eateries.
        Flexspace, Delhi at Hargobind Enclave is a place for hardcore business community of entrepreneurs in  Delhi.</p>
        </div>
      </div>
    </div>
  )
}

export default Location1