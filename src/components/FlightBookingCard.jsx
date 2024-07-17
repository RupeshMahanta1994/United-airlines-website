import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import FlightBooking from "../components/FlightBooking"
import FlightStatus from "../components/FlightStatus"
import FlightCheckIn from "../components/FlightCheckIn"
import FlightTrips from "../components/FlightTrips"

const FlightBookingCard = () => {
    

  return (
    <div className=' flight-booking-card'>
      <Tabs
      defaultActiveKey="book"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="book" title="Book">
        <FlightBooking/>
      </Tab>
      <Tab eventKey="flightStatus" title="Flight status">
        <FlightStatus/>
      </Tab>
      <Tab eventKey="check-in" title="Check-in">
        <FlightCheckIn/>
      </Tab>
      <Tab eventKey="myTrips" title="My trips" >
        <FlightTrips/>
      </Tab>
    </Tabs>
    
    </div>
  )
}

export default FlightBookingCard