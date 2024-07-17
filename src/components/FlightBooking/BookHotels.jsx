import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { RiExternalLinkLine } from 'react-icons/ri'

const BookHotels = () => {
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Going to <sup>*</sup></Form.Label>
                                <Form.Control type='text' placeholder='Destination' />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Dates <sup>*</sup></Form.Label>
                                <Form.Control type='date' placeholder='Chek-in - Checkout' />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Number of rooms <sup>*</sup></Form.Label>
                                <Form.Select aria-label='1 room'>
                                    <option value="1 room">1 room</option>
                                    <option value="2 room">2 room</option>
                                    <option value="3 room">3 room</option>
                                    <option value="4 room">4 room</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Travelers <sup>*</sup></Form.Label>
                                <Form.Control type='text' placeholder='1 Adult' />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col>
                            <Row>
                                <Form.Check label='Book with miles'/>
                            </Row>
                            <Row>
                                <Button>Find Hotels<RiExternalLinkLine /></Button>
                            </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Form>
        </Container>
    )
}

export default BookHotels