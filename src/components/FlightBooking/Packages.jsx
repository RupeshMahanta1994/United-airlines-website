import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { RiExternalLinkLine } from "react-icons/ri";

const Packages = () => {
  return (
    <Container>
      <Form>
        <Row >
          <Col>
            <Form.Check type='radio' label="Flight, hotel and car" />
          </Col>
          <Col>

            <Form.Check type='radio' label="Flight and hotel" />
          </Col>
          <Col>
            <Form.Check type='radio' label="Flight and car" />
          </Col>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>From <sup>*</sup></Form.Label>
            <Form.Control type='text' placeholder='Origin' />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>To <sup>*</sup></Form.Label>
            <Form.Control type='text' placeholder='Destination' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col}>
            <Form.Label>Dates <sup>*</sup></Form.Label>
            <Form.Control type='text' placeholder='Origin' />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Travellers <sup>*</sup></Form.Label>
            <Form.Control type='text' placeholder='2 Travelers' />
          </Form.Group>
        </Row>
        <Row>
      
        <Form.Group as={Col}>
          <Form.Label>Rooms <sup>*</sup></Form.Label>
          <Form.Select aria-label='1 room'>
              <option value="1 room">1 room</option>
              <option value="2 room">2 room</option>
              <option value="3 room">3 room</option>
              <option value="4 room">4 room</option>
          </Form.Select>
        </Form.Group>
      
          <Col>
          </Col>
        </Row>
        <Row>
          <Col></Col>
         <Col>
         <Button>Find trips<RiExternalLinkLine /> </Button>
         </Col>
        </Row>
      </Form>

    </Container>
  )
}

export default Packages