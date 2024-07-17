import React from 'react'
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import FlightBookingCard from '../components/FlightBookingCard'
import one from "../assets/1.jpg"
import two from "../assets/2.jpg"
import three from "../assets/3.jpg"

const HomePage = () => {

  return (
    <>
    <div style={{position:"relative"}}>
    <Carousel fade >
      <Carousel.Item fluid interval={1500}>
        
      <Image className='image-sizing'  src={two} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item fluid interval={1500}>
        <Image className='image-sizing' src={three} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item fluid >
      <Image className='image-sizing' src={two} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    <Container className='carousel-text'>
        <Row>
            <Col >
            <FlightBookingCard/>
            </Col>
            <Col>
            Nothing</Col>
        </Row>
    </Container>
    </div>
    </>
  )
}

export default HomePage