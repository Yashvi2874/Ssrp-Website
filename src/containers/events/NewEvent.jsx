import "./NewEvent.css";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import './Particle';
import Events from './EventDetails';

export default function Scene() {

  const balls = [];
  for (let i = 0; i < 15; i++) {
    balls.push(<div key={i} className="ball"></div>);
  }

  return (
    <div className="Eventcontainer">
      <div className="main">
        <div className="article">
          <div className="panel red">
            <div className='Event-heading'>
              <div className='first-name'>Astro</div>
              <div className='last-name'>Chronicles</div>
            </div>
            <div className="down-arrow-box">
              <span />
              <span />
              <span />
            </div>
            <div className="dark-circles" id="circle-one"></div>
            <div className="dark-circles" id="circle-two"></div>
            <div className="dark-circles" id="circle-three"></div>
            <div className="dark-circles" id="circle-four"></div>
            <div className="bottom-text">
              <div className="arrow">
                <Link to="#"></Link>
              </div>
            </div>
            <div className="ball-container">
              {balls}
            </div>
          </div>
          {Events.map((event, index) => {
            const titleSpans = [];
            for (let i = 0; i < event.title.length; i++) {
              titleSpans.push(<span key={i}>{event.title[i]}</span>);
            }
            return (
              <div key={index} className={`panel ${event.color}`}>
                <img src={`/assets/images/events_images/${event.src}`} className='img1' alt={event.title} />
                <div className="Eventtitle">
                  <div>
                    {titleSpans}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

