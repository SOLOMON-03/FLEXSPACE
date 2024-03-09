import React from 'react'
import {Table, Container} from 'react-bootstrap'
// import "../Style/pricing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
export const Pricing = () => {
  return (
    <div className='pricing-table mt-5 p-4'>
      <Container>
      <Table striped bordered hover>
      <thead data-aos="fade-left" data-aos-delay="100" data-aos-easing='ease-in-out' data-aos-duration="1000">
        <tr data-aos="fade-left" data-aos-delay="200" data-aos-easing='ease-in-out' data-aos-duration="1000">
          <th>Plan</th>
          <th>Daily Pass</th>
          <th>Coworking Membership</th>
          <th>Ultimate Membership</th>
          <th>Virtual Office</th>
          <th>Private Cabin</th>

        </tr>
      </thead>
      <tbody>
        <tr data-aos="fade-left" data-aos-delay="300" data-aos-easing='ease-in-out' data-aos-duration="1000">
          <td>Coworking hours</td>
          <td>One time 24hours Access</td>
          <td>12hrs*7days*1month</td>
          <td>12hrs*7days*1month</td>
          <td>2*DayPass</td>
          <td>12hrs*7days*1month</td>

        </tr>
        <tr data-aos="fade-left" data-aos-delay="400" data-aos-easing='ease-in-out' data-aos-duration="1000">
        <td>Meeting Rooms</td>
          <td><FontAwesomeIcon icon={faXmarkCircle} color='red' size={20} className='flex self-center' /></td>
          <td>6hours/month</td>
          <td>6hours/month</td>
          <td><FontAwesomeIcon icon={faXmarkCircle} color='red' size={20} className='flex self-center' /></td>
          <td>6hours/person</td>
        </tr>
        <tr data-aos="fade-left" data-aos-delay="500" data-aos-easing='ease-in-out' data-aos-duration="1000">
        <td>Addtional Meeting Rooms</td>
          <td>Rs.250/hour</td>
          <td>Rs.200/hour</td>
          <td>Rs.200/hour</td>
          <td>Rs.200/hour</td>
          <td>Rs.200/hour</td>
        </tr>
        <tr data-aos="fade-left" data-aos-delay="600" data-aos-easing='ease-in-out' data-aos-duration="1000">
        <td>Timing</td>
          <td>24 hours</td>
          <td>9 am to 9 pm</td>
          <td>24 hours</td>
          <td><FontAwesomeIcon icon={faXmarkCircle} color='red' size={20} className='flex self-center' /></td>
          <td>24 hours</td>
        </tr>
        <tr data-aos="fade-left" data-aos-delay="700" data-aos-easing='ease-in-out' data-aos-duration="1000">
        <td>Key to building and rooms</td>
          <td><FontAwesomeIcon icon={faXmarkCircle} color='red' size={20} className='flex self-center' /></td>
          <td><FontAwesomeIcon icon={faXmarkCircle} color='red' size={20} className='flex self-center'/></td>
          <td><FontAwesomeIcon icon={faXmarkCircle} color='red' size={20} className='flex self-center'/></td>
          <td><FontAwesomeIcon icon={faXmarkCircle} color='red' size={20} className='flex self-center'/></td>
          <td><FontAwesomeIcon icon={faCheckCircle} size={20}/></td>
        </tr>
        <tr data-aos="fade-left" data-aos-delay="800" data-aos-easing='ease-in-out' data-aos-duration="1000">
        <td>Parking</td>
          <td>Rs.30 for 2 hours and Rs.50 for full day</td>
          <td>Rs.1000/month</td>
          <td>Rs.1000/month</td>
          <td><FontAwesomeIcon icon={faXmarkCircle} color='red' size={20} className='flex self-center' /></td>
          <td>Rs.1000/month</td>
        </tr>
      </tbody>
      
    </Table>

    <form className="form mt-10">
      <p className="title" data-aos="fade-down" data-aos-delay="50" data-aos-easing='ease-in-out' data-aos-duration="1000">Pricing </p>
      <p className="message" data-aos="fade-down" data-aos-delay="100" data-aos-easing='ease-in-out' data-aos-duration="1000">Signup now and get full access to our app. </p>
      <div className="flex">
        <label data-aos="fade-down" data-aos-delay="300" data-aos-easing='ease-in-out' data-aos-duration="1000">
          <input className="input" type="text" placeholder="" required="" />
          <span important className='span-field'>Firstname</span>
        </label>
        <label data-aos="fade-down" data-aos-delay="400" data-aos-easing='ease-in-out' data-aos-duration="1000">
          <input className="input" type="text" placeholder="" required="" />
          <span className='span-field'>Lastname</span>
        </label>
      </div>
      <label data-aos="fade-down" data-aos-delay="500" data-aos-easing='ease-in-out' data-aos-duration="1000">
        <input className="input" type="email" placeholder="" required="" />
        <span className='span-field'>Email</span>
      </label>
      <label data-aos="fade-down" data-aos-delay="500" data-aos-easing='ease-in-out' data-aos-duration="1000">
        <input className="input" type="text" placeholder="" required="" />
        <span className='span-field'>UPI Id</span>
      </label>
      
      <button data-aos="fade-down" data-aos-delay="700" data-aos-easing='ease-in-out' data-aos-duration="1000" className="submit">Pay Bill</button>
      
    </form>

    </Container>
    </div>
  )
}
