import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { MdKeyboardArrowRight } from "react-icons/md";

const FlightTrips = () => {
  return (
    <Container>
      <h5>Check-in</h5>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Confirmation or ticket number<sup>*</sup></Form.Label>
          <Form.Control type="text" placeholder="Confirmation number" />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last name<sup>*</sup></Form.Label>
          <Form.Control type="text" placeholder="Last name" />
        </Form.Group>
        <Row>
          <Col>
          <a href="#">Find your travel credits <MdKeyboardArrowRight size="1.5rem" /></a>
          </Col>
          <Col>
        <Button variant="primary" type="submit">
          Submit
        </Button>
          
          </Col>
        </Row>
      </Form>
    
      <p className='mt-3'>
      Looking for past or canceled flights? <a href=""> Sign in</a>
      </p>
    </Container>
  )
}

export default FlightTrips