import  { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';
import gsap from 'gsap';
import { useCursorContext } from '../../components/cursor/CursorContext';
import { motion } from 'framer-motion';

function Event() {
  const planes = useRef([]);
  const requestAnimationFrameId = useRef(null);
  const xForce = useRef(0);
  const yForce = useRef(0);
  const speed = 0.01;
  const easing = 0.08;

  const { cursorVariant, variants } = useCursorContext();

  const setRef = (el, index) => {
    planes.current[index] = el;
  };

  const lerp = (start, end, amount) => start * (1 - amount) + end * amount;

  const animate = useCallback(() => {
    xForce.current = lerp(xForce.current, 0, easing);
    yForce.current = lerp(yForce.current, 0, easing);

    planes.current.forEach((plane, index) => {
      if (plane) {
        const factors = [0.3, 0.2, 0.5, 0.4, 0.6, 0.1, 0.25, 0.35];
        const factor = factors[index % factors.length];
        gsap.set(plane, { x: `+=${xForce.current * factor}`, y: `+=${yForce.current * factor}` });
      }
    });

    if (Math.abs(xForce.current) < 0.01) xForce.current = 0;
    if (Math.abs(yForce.current) < 0.01) yForce.current = 0;

    if (xForce.current > 0 || yForce.current > 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId.current);
      requestAnimationFrameId.current = null;
    }
  }, [easing]);

  const manageMouseMove = useCallback((e) => {
    const { movementX, movementY } = e;
    xForce.current += movementX * speed;
    yForce.current += movementY * speed;

    if (!requestAnimationFrameId.current) {
      requestAnimationFrameId.current = requestAnimationFrame(animate);
    }
  }, [animate, speed]);

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      if (requestAnimationFrameId.current) {
        cancelAnimationFrame(requestAnimationFrameId.current);
      }
    };
  }, [manageMouseMove]);

  const events = [
    { id: 1, src: 'T1.jpg', title: 'Event One' },
    { id: 2, src: 'T2.jpg', title: 'Event Two' },
    { id: 3, src: 'group.jpeg', title: 'Event Three' },
    { id: 4, src: 'moon.jpg', title: 'Event One' },
    { id: 5, src: 'Image_10.jpg', title: 'Event Two' },
    { id: 6, src: 'start.jpg', title: 'Event Three' },
    { id: 7, src: 'eve.jpg', title: 'Event One' },
    { id: 8, src: 'red.jpg', title: 'Event Two' },
    // Add more events as needed
  ];

  return (
    <>
      <motion.div className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />

      <div className="eventheading">
        <h1>Astrochronicles</h1>
      </div>

      <div className='eventscontainer-mobile'>
        <div className='eventheading'>
          <h2>Trioconclave</h2>
        </div>

        <div className="Events-container">
          {events.map((event) => (
            <div className="event_images" key={event.id}>
              <Link to={`/event/${event.id}`}>
                <img
                  id={`i${event.id}`}
                  src={`/assets/images/events_images/${event.src}`}
                  alt={`event${event.id}`}
                  ref={el => setRef(el, event.id)}
                  fetchpriority='high'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Event;
