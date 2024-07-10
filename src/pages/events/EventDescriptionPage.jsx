import React from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
import EventDescription from '../../containers/events/EventDescription';
import Events from '../events/EventPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function EventDescriptionPage() {
  return (
    <>
        <Navbar />
        <EventDescription />
        <Footer />

        

    </>
  )
}

export default EventDescriptionPage;