import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
import EventDescription from '../../containers/events/EventDescription';
//import Events from '../events/EventPage';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsPage from '../../containers/events/DetailsPage';



function EventDescriptionPage() {
  return (
    <>
        <Navbar />
        <DetailsPage />
        <Footer />

        

    </>
  )
}

export default EventDescriptionPage;