import React from 'react';
import './Team.css'; // Make sure to import your CSS file

const Team = () => {

    const teamMembers = [
        {
          name: 'Johnny Depp',
          department: 'CEO',
          image: 'https://dummyimage.com/300'
        },
        {
          name: 'Alia bhatt',
          department: 'CTO',
          image: 'https://dummyimage.com/300'
        },
        {
            name: 'Yo Yo Honey Singh',
            department: 'CEO',
            image: 'https://dummyimage.com/300'
          },
          {
            name: 'Rahul Gandhi',
            department: 'CTO',
            image: 'https://dummyimage.com/300'
          },
          {
            name: 'Narendra Modi',
            department: 'CEO',
            image: 'https://dummyimage.com/300'
          },
          {
            name: 'Amit Shah',
            department: 'CTO',
            image: 'https://dummyimage.com/300'
          }
        // Add more team members as needed
      ];


  return (
    <div className='Team'>
        <section className='Team_section'>
        <h1 className='Team-title'>Our Team</h1>

        <div className="marquee marquee--hover-pause">
            <ul className="marquee__content">
            {teamMembers.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        <p className='department'>{member.department}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>

            <ul aria-hidden="true" className="marquee__content">
            {teamMembers.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        <p className='department'>{member.department}</p>
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
  );
};

export default Team;
