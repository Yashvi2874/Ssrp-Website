import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';
import gsap from 'gsap';
import { useCursorContext } from '../../components/cursor/CursorContext';

function Event() {
    const planes = useRef([]);
    const speed = 0.01;
    let xForce = 0;
    let yForce = 0;
    let requestAnimationFrameId = null;
    const easing = 0.08;

    const manageMouseMove = (e) => {
        const { movementX, movementY } = e;
        xForce += movementX * speed;
        yForce += movementY * speed;

        if (!requestAnimationFrameId) {
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    };

    const lerp = (start, end, amount) => start * (1 - amount) + end * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);

        planes.current.forEach((plane, index) => {
            if (plane) {
                const factors = [0.3, 0.2, 0.5, 0.4, 0.6, 0.1, 0.25, 0.35];
                const factor = factors[index % factors.length];
                gsap.set(plane, { x: `+=${xForce * factor}`, y: `+=${yForce * factor}` });
            }
        });

        if (Math.abs(xForce) < 0.01) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce > 0 || yForce > 0) {
            requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove);

        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
            if (requestAnimationFrameId) {
                cancelAnimationFrame(requestAnimationFrameId);
            }
        };
    }, []);

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
            <div className="eventheading">
                <h1>Astrochronicles</h1>
            </div>

            <div className='eventscontainer-mobile'>
                <div className='eventheading'>
                    <h2>Trioconclave</h2>
                </div>

                <div className="Events-container">
                    {events.map((event, index) => (
                        <div className="event_images" key={index}>
                            <Link to={`/event/${event.id}`}>
                                <img
                                    id={`i${index + 1}`}
                                    src={`/assets/images/events_images/${event.src}`}
                                    alt={`event${index}`}
                                    ref={el => planes.current[index] = el}
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
