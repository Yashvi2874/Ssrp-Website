import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';   
import Events from './EventDetails';
import './EventDescription.css';
import { useCursorContext } from '../../components/cursor/CursorContext';

const EventDescription = () => {
  const { eventId } = useParams();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const { cursorVariant, variants, textEnter, textLeave } = useCursorContext();

  useEffect(() => {
    const foundEvent = Events.find(e => e.id === parseInt(eventId));

    if (foundEvent) {
      setEvent(foundEvent);
    }

    // Introduce a delay of 1 second before setting the loading state to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [eventId]);

  if (loading) {
    return (
      <motion.div className='event-loading' style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-10vw' }}
        initial={{ opacity: 0, y: 100}} // Initial animation state
        animate={{ opacity: 1, y: 0}} // Animation when component appears
        exit={{ opacity: 1, y: -800 }} // Animation when component exits
      >
        <div className='event-title'>{event.title}</div>
      </motion.div>
    );
  }

  if (!event) {
    return <div style={{height:'80vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center', color:'white', fontSize:'4rem'}}> 404 Page Not Found</div>;
  }

  return (
    <div className='details-container-events'>
      <motion.div className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration:0}}
      />
      <motion.div className='details-bg-events'
        initial={{ opacity: 0, y: 0 }} // Initial animation state
        animate={{ opacity: 1, y: -1000, transition:{duration:'0.6'} }} // Animation when component appears
        exit={{ opacity: 0, y: 0 }}
        onAnimationComplete={() => setContentVisible(true)} // Set content visible after bg animation completes
       />
      {contentVisible && (
        <motion.div className='details-content-events'
          initial={{ opacity: 0, y: 100 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component appears
          exit={{ opacity: 0, y: 100 }} // Animation when component exits
        >
          <img src={`/assets/images/event_images/${event.src}`} alt={event.title} />
          <div className='details-events'>
            <div className='details-title-events' onMouseEnter={textEnter} onMouseLeave={textLeave}>{event.title}</div>
            <div className='details-section-heading-events' onMouseEnter={textEnter} onMouseLeave={textLeave}>Description</div>
            <div className='details-description text-events'>{event.description}</div>
            <div className='details-section-heading-events' onMouseEnter={textEnter} onMouseLeave={textLeave}>Objective</div>
            <div className='details-objectives text-events' >{event.objective}</div>
            <div className='details-section-heading-events' onMouseEnter={textEnter} onMouseLeave={textLeave}>Outcomes</div>
            <div className='details-outcomes text-events'>{event.outcomes}</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EventDescription;
