import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import FlightsList from './FlightBooking/FlightsList'
import Packages from './FlightBooking/Packages'
import BookHotels from './FlightBooking/BookHotels'
import BookCars from './FlightBooking/BookCars'

const FlightBooking = () => {
  return (
    <Container>
      <Tabs
      defaultActiveKey="flight"
      id="fill-tab-example"
      className="mb-3"
      variant='underline'
    
      fill
    >
      
      <Tab eventKey="flight" title="Flight">
        <FlightsList/>
      </Tab>
      <Tab eventKey="packages" title="Packages" >
        <Packages/>
      </Tab>
      <Tab eventKey="hotel" title="Hotel" >
        <BookHotels/>
      </Tab>
      <Tab eventKey="car" title="Car" >
        <BookCars/>
      </Tab>
      <Tab eventKey="cruise" title="Cruise" >
        Cruise
      </Tab>
    </Tabs>
    </Container>
  )
}

export default FlightBooking