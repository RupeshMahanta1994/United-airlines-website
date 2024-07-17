import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { MdKeyboardArrowRight } from "react-icons/md";

const FlightStatus = () => {
  return (
    <Container>
    <div>
      <h5>Flight status</h5>
      <Form>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>From</Form.Label>
            <Form.Control type='text' placeholder='From'/>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>To</Form.Label>
            <Form.Control type='text' placeholder='To'/>
          </Form.Group>
        </Row>
        <p className='my-3'>and/or</p>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Flight number</Form.Label>
            <Form.Control type='text' placeholder='Flight no.'/>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control type='text' placeholder='To'/>
          </Form.Group>
        </Row>
      </Form>
      <Row className='mt-3'> 
        <Col>
        <p className='text-primary'>Receive flight status notification by email or text message <MdKeyboardArrowRight size="1.5rem"/></p>
        </Col>
        <Col >
        <Button >Search</Button>
        </Col>
      </Row>
    </div>
    </Container>
  )
}

export default FlightStatus