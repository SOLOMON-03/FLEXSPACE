import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container, Row, Col} from 'react-bootstrap'
import { faHouse, faEnvelope, faPhone, faPrint} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTwitter, faGoogle, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'
export const Footer = () => {
  return (
    <div className='footer'>
        <Container>
          <Row>
          <div className="social-networks">

            <Col>
                <div>
                    <span>Get connected with us on social networks:</span>
                </div>
                </Col>
                <Col>
                <div className='social-links'>
                    <a href='#' className='me-4 text-reset'>
                        {/* <MDBIcon fab icon="facebook-f" /> */}
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href='#' className='me-4 text-reset'>
                        {/* <MDBIcon fab icon="twitter" /> */}
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href='#' className='me-4 text-reset'>
                        {/* <MDBIcon fab icon="google" /> */}
                        <FontAwesomeIcon icon={faGoogle}/>
                    </a>
                    <a href='#' className='me-4 text-reset'>
                        {/* <MDBIcon fab icon="instagram" /> */}
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href='#' className='me-4 text-reset'>
                        {/* <MDBIcon fab icon="linkedin" /> */}
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href='#' className='me-4 text-reset'>
                        {/* <MDBIcon fab icon="github" /> */}
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    
                </div>
             

              </Col>
            </div>

            <section/>
            <hr/>
          </Row>
          <Row>
            <Col>
              <img src='' alt='logo'/>
            </Col>
            <Col>

            </Col>
            <Col>
              <div className='contact-details'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <div className='details-content'>
                            <p style={{marginTop:'5px'}}>
                                {/* <MDBIcon icon="home" className="me-2" /> */}
                                <FontAwesomeIcon icon={faHouse} />Coimbatore, Tamilnadu.<br/>
                            </p>
                            <p>
                                {/* <MDBIcon icon="envelope" className="me-3" /> */}
                                <FontAwesomeIcon icon={faEnvelope} />

                                info@example.com
                            </p>
                            <br/>
                            <p>
                                {/* <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88 */}
                                <FontAwesomeIcon icon={faPhone} />

                                + 01 234 567 88
                            </p>
                            <p>
                                {/* <MDBIcon icon="print" className="me-3" /> + 01 234 567 89 */}
                                <FontAwesomeIcon icon={faPrint} />
                                + 01 234 567 89
                            </p>
                            </div>
              </div>
            </Col>
          </Row>
          <hr/>
          <Row>
          <div className='text-center p-4' >
                © 2024 Copyright :
                <a className='text-reset fw-bold' href=''>
                    &nbsp;healthcare.com
                </a>
            </div>
          </Row>
        </Container>
    </div>
  )
}
