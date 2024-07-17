import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { MdKeyboardArrowRight } from "react-icons/md";

const FlightCheckIn = () => {
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
          <a href="#">Check in with your MilagePlus number <MdKeyboardArrowRight size="1.5rem" /></a>
          </Col>
          <Col>
        <Button variant="primary" type="submit">
          Submit
        </Button>
          
          </Col>
        </Row>
      </Form>
      <p className='mt-3'>
      Check-in is available starting 24 hours before your scheduled departure.
      </p>
      <p>
      See our <a href=""> Check-in and Airport Processing Times</a> page for details.
      </p>
    </Container>
  )
}

export default FlightCheckIn