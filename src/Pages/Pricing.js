import React from 'react'
import {Table, Container} from 'react-bootstrap'
import { FcCheckmark } from "react-icons/fc";
import { FaXmark } from "react-icons/fa6";
import "./pricing.css"
export const Pricing = () => {
  return (
    <div className='pricing-table'>
      <Container>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Plan</th>
          <th>Daily Pass</th>
          <th>Coworking Membership</th>
          <th>Ultimate Membership</th>
          <th>Virtual Office</th>
          <th>Private Cabin</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Coworking hours</td>
          <td>One time 24hours Access</td>
          <td>12hrs*7days*1month</td>
          <td>12hrs*7days*1month</td>
          <td>2*DayPass</td>
          <td>12hrs*7days*1month</td>

        </tr>
        <tr>
        <td>Meeting Rooms</td>
          <td><FaXmark color='red' size={20}/></td>
          <td>6hours/month</td>
          <td>6hours/month</td>
          <td><FaXmark color='red' size={20}/></td>
          <td>6hours/person</td>
        </tr>
        <tr>
        <td>Addtional Meeting Rooms</td>
          <td>Rs.250/hour</td>
          <td>Rs.200/hour</td>
          <td>Rs.200/hour</td>
          <td>Rs.200/hour</td>
          <td>Rs.200/hour</td>
        </tr>
        <tr>
        <td>Timing</td>
          <td>24 hours</td>
          <td>9 am to 9 pm</td>
          <td>24 hours</td>
          <td><FaXmark color='red' size={20}/></td>
          <td>24 hours</td>
        </tr>
        <tr>
        <td>Key to building and rooms</td>
          <td><FaXmark color='red' size={20} /></td>
          <td><FaXmark color='red' size={20}/></td>
          <td><FaXmark color='red' size={20}/></td>
          <td><FaXmark color='red' size={20}/></td>
          <td><FcCheckmark size={20}/></td>
        </tr>
        <tr>
        <td>Parking</td>
          <td>Rs.30 for 2 hours and Rs.50 for full day</td>
          <td>Rs.1000/month</td>
          <td>Rs.1000/month</td>
          <td><FaXmark color='red' size={20}/></td>
          <td>Rs.1000/month</td>
        </tr>
      </tbody>
      
    </Table>

    <form className="form">
      <p className="title">Pricing </p>
      {/* <p className="message">Signup now and get full access to our app. </p> */}
      <div className="flex">
        <label>
          <input className="input" type="text" placeholder="" required="" />
          <span important className='span-field'>Firstname</span>
        </label>
        <label>
          <input className="input" type="text" placeholder="" required="" />
          <span className='span-field'>Lastname</span>
        </label>
      </div>
      <label>
        <input className="input" type="email" placeholder="" required="" />
        <span className='span-field'>Email</span>
      </label>
      <label>
        <input className="input" type="text" placeholder="" required="" />
        <span className='span-field'>UPI Id</span>
      </label>
      
      <button className="submit">Pay Bill</button>
      
    </form>

    </Container>
    </div>
  )
}
