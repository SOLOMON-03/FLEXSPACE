import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './content.css'
const Content = () => {
  return (
    
    <div className='main-content'>
        <Container>
            <Row>
                <Col className='text-content'>
                    <p>
                    With certain React-Bootstrap components, you may want to modify the component or HTML tag that is rendered.

If you want to keep all the styling of a particular React-Bootstrap component but switch the component that is finally rendered (whether it's a different React-Bootstrap component, a different custom component, or a different HTML tag) you can use the as prop to do so.

The example below passes an anchor to the as prop in a Button component. This ultimately causes a a tag to be rendered but with the same styles as a Button component.
                    </p>
                </Col>
                <Col>
                    <div className='image'>
                    <img src='https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg?w=996&t=st=1709739934~exp=1709740534~hmac=4509ea440f1b442d7035ab3952404401b00dafe9d6a30342eed2030f8b5ec1b8' alt='img'/>
                    </div>
                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default Content