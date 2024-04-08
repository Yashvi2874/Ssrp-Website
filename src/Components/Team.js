import React from 'react';
import './Team.css'; // Make sure to import your CSS file
import  Navbar from './Navbar';
import Founder_image from './Community/Head/Rishikesh_Bhintade.jpg';
import Associate_Head_image from './Community/Head/Riaan_jain.jpg';
import Operations_Head_image from './Community/Head/Tanisha_Mukherjee.jpg';



const Team = () => {

    const Comps = [
        {
          name: 'Johnny Depp',
          image: 'https://dummyimage.com/300'
        },
        {
          name: 'Alia bhatt',
          image: 'https://dummyimage.com/300'
        },
        {
            name: 'Yo Yo Honey Singh',
            image: 'https://dummyimage.com/300'
          },
          {
            name: 'Rahul Gandhi',
            image: 'https://dummyimage.com/300'
          },
          {
            name: 'Narendra Modi',
            image: 'https://dummyimage.com/300'
          },
          {
            name: 'Amit Shah',
            image: 'https://dummyimage.com/300'
          }
        // Add more team members as needed
      ];


  return (
    
    <div className='Team_Page'>
      <Navbar />
      
    <div className='Team'>
        <section className='Team_section'>
        <h1 className='Team-title'>Our Community</h1>
        <div className='Team-head'>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Associate_Head_image} alt="Riaan Jain" />
            </div>
            <div class="flip-box-back">
              <h2>Riaan Jain</h2>
              <p>Associate Director</p>
            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Founder_image} alt="Rishikesh Bhintade" />
            </div>
            <div class="flip-box-back">
              <h2>Rishikesh Bhintade</h2>
              <p>Founder & Project Director</p>
            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Operations_Head_image} alt="Tanisha Mukherjee" />
            </div>
            <div class="flip-box-back">
              <h2>Tanisha Mukherjee</h2>
              <p>Operations Director</p>
            </div>
          </div>
        </div>
        </div>
        <h1 className='Team-department'>Computer Systems</h1>
        <div className="marquee marquee--hover-pause">
            <ul className="marquee__content">
            {Comps.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>

            <ul aria-hidden="true" className="marquee__content">
            {Comps.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>
          </div>
          <h1 className='Team-department'>Electronics</h1>
        <div className="marquee marquee--hover-pause">
            <ul className="marquee__content">
            {Comps.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>

            <ul aria-hidden="true" className="marquee__content">
            {Comps.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>
          </div>
          <h1 className='Team-department'>Mechanical</h1>
        <div className="marquee marquee--hover-pause">
            <ul className="marquee__content">
            {Comps.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>

            <ul aria-hidden="true" className="marquee__content">
            {Comps.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>
          </div>
          <h1 className='Team-department'>Business</h1>
        <div className="marquee marquee--hover-pause">
            <ul className="marquee__content">
            {Comps.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>

            <ul aria-hidden="true" className="marquee__content">
            {Comps.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>
          </div>
        </section>
    </div>
    </div>
  );
};

export default Team;
