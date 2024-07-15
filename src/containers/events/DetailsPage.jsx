// src/components/EventDetails/EventDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';

const events = [
  { id: 1, name: 'Event One', description: 'Details of Event One', date: 'July 15, 2024', location: 'Mumbai, India', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 2, name: 'Event Two', description: 'Details of Event Two', date: 'August 10, 2024', location: 'Delhi, India', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 3, name: 'Event Three', description: 'Details of Event Three', date: 'September 5, 2024', location: 'Bangalore, India', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 4, name: 'Event Four', description: 'Details of Event Four', date: 'October 20, 2024', location: 'Chennai, India', imgSrc: '/assets/images/events_images/cloud.jpg' }
];

const DetailsPage = () => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details">
      <div className="event-image">
        <img src={event.imgSrc} alt={event.name} />
      </div>
      <div className="event-content">
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</p>
      </div>
    </div>
  );
};

export default DetailsPage;
