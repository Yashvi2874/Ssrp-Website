import React from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
import EventDescription from '../../containers/events/EventDescription';


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