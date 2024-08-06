import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Events from './EventDetailsData';
import './EventDescription.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventDescription = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(false);

  useEffect(() => {
    const foundEvent = Events.find(p => p.id === parseInt(eventId));

    if (foundEvent) {
      setEvent(foundEvent);
    }

    AOS.init({ duration: "2000" });
  }, [eventId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='events-details-container'>      
      <div className="video-left">
        <video src={`/assets/images/events_images/${event.src}`} controls autoPlay muted loop></video>
      </div>
      <div className="event-description">
          <div className="close-button">
            <a href="/events">X</a>
          </div>
          <div className='event-title' data-aos="zoom-in">
            {event.title}
          </div>
          <video src={`/assets/images/events_images/${event.src}`} controls autoPlay muted loop></video>
          <div className='event-description-text' data-aos="fade-left">
            
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, est vel mollis eleifend, urna eros auctor enim, a tempus felis nisi viverra leo. Mauris ut lorem venenatis, tempor ante vel, semper est. Donec facilisis venenatis tincidunt. Donec ultrices libero vel leo molestie accumsan. Suspendisse justo metus, venenatis nec nisl.
          </div>
      </div>

    </div>
  );
};

export default EventDescription;
