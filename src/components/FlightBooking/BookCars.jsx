import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const BookCars = () => {
  return (
    <Container>
        <Col >
        <Row>
            <Form.Group as={Col} className='d-flex flex-column justify-content-end'>
                <Form.Label>Pickup location</Form.Label>
                <Form.Control type='text' placeholder='Pickup location'/>
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Check label='Return car to same location'/>
                <Form.Label>Drop off location</Form.Label>
                <Form.Control type='text' placeholder='Drop off location'/>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} className='d-flex flex-column justify-content-end'>
                <Form.Label>Rantal dates <sup>*</sup></Form.Label>
                <Form.Control type='date' placeholder=''/>
            </Form.Group>
           <Form.Group as={Col}>
           <Form.Check label='Primary Driver is 25 or odler'/>
            <Form.Label>Age <sup>*</sup></Form.Label>
           <InputGroup >
            <Button>-</Button>
            <Form.Control type='text' placeholder='10'/>
            <Button>+</Button>
            </InputGroup>
           </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
                <Form.Label>Pickup time</Form.Label>
                <Form.Select>
                    <option value="">7:00 a.m.</option>
                    <option value="">8:00 a.m.</option>
                    <option value="">8:00 a.m.</option>
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Drop off time</Form.Label>
                <Form.Select>
                    <option value="">7:00 a.m.</option>
                    <option value="">8:00 a.m.</option>
                    <option value="">8:00 a.m.</option>
                </Form.Select>
            </Form.Group>
        </Row>
        <Row>
            <Col>
            <div></div>
            <p>MeleagePlus members get special savings on rentals and earn miles</p>
            </Col>
            <Col>
            <Form.Check label='Book with miles'/>
            <Button>Find cars <FaExternalLinkSquareAlt/></Button>
            </Col>
        </Row>
        </Col>
    </Container>
  )
}

export default BookCars