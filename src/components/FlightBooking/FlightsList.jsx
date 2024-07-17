import React from 'react'
import { Form,Row,Col,Button, Stack, Container } from 'react-bootstrap'
import { MdKeyboardArrowRight } from 'react-icons/md'

const FlightsList = () => {
  return (
    <div>
      
      <Form>
        <Row>
            <Form.Group as={Col}>
                <Form.Check type='radio' label="Roundtrip" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Check type='radio' label="One-way" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Check type='checkbox' label="Book with miles" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Check type='checkbox' label="Flexible dates" />
            </Form.Group>
        </Row>
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
    
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Dates<sup>*</sup></Form.Label>
            <Form.Control type='text' placeholder='Flight no.'/>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Traveller</Form.Label>
            <Form.Control type='text' placeholder='1 Adult'/>
          </Form.Group>
        </Row>
      </Form>
      <Container>

      <Row className='mt-3'> 
        <Col>
        <Stack>
            <Col>
             Advanced search <MdKeyboardArrowRight size="1.5rem"/></Col>
            <Col>
            (Certificates, multi-city and upgrade)</Col>
        </Stack>
       
        </Col>
        <Col >
        <Button >Find flights</Button>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default FlightsList