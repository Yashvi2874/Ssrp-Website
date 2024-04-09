import React from 'react';
import './Team.css'; // Make sure to import your CSS file
import  Navbar from './Navbar';
import Founder_image from './Community/Head/Rishikesh_Bhintade.jpg';
import Associate_Head_image from './Community/Head/Riaan_jain.jpg';
import Operations_Head_image from './Community/Head/Tanisha_Mukherjee.jpg';
//import Computer_Systems_Member_1 from './Community/Computer_Systems/Yashasvi_Gupta.jpg';
import Computer_Systems_Member_2 from './Community/Members/Comps/Om_Thanage.jpeg';
import Computer_Systems_Member_3 from './Community/Members/Comps/Piyush_Chaudhary.jpg';
import Computer_Systems_Member_4 from './Community/Members/Comps/Tanmay_Goraksha.jpg';



const Team = () => {

    const Comps = [
        {
          name: 'Yashasvi Gupta',
          image: 'https://dummyimage.com/300',
          description: 'Web Dev Head'
        },
        {
          name: 'Om Thanage',
          image: Computer_Systems_Member_2,
          description: 'Web Dev & ODHS'
        },
        {
            name: 'Piyush Chaudhary',
            image: Computer_Systems_Member_3,
            description: 'Web Dev & ODHS'
          },
          {
            name: 'Tanmay Goraksha',
            image: Computer_Systems_Member_4,
            description: 'Web Dev & ODHS'
          },
          {
            name: 'Swarni Chouhan',
            image: 'https://dummyimage.com/300',
            description: 'Web Dev & ODHS'
          },
          {
            name: 'Siya Nair',
            image: 'https://dummyimage.com/300',
            description: 'Web Dev & ODHS'
          },
          {
            name : 'Yash Sheth',
            image : 'https://dummyimage.com/300',
            description : 'ODHS'
          },
          {
            name: 'Mit Mhatre',
            image: 'https://dummyimage.com/300',
            description: 'ROS, IP'
          },
          {
            name: 'Yash Mahajan',
            image: 'https://dummyimage.com/300',
            description: 'ROS, IP'
          },
          {
            name: 'Tanil Sheth',
            image: 'https://dummyimage.com/300',
            description: 'ROS, IP'
          },
          {
            name: 'Aditi Agarwal',
            image: 'https://dummyimage.com/300',
            description: 'ROS, IP'
          }
        // Add more team members as needed
      ];

      const Electronics = [
        {
          name: 'Lakshya Aswani',
          image: 'https://dummyimage.com/300',
          description: 'Electronics Head'
        },
        {
          name: 'Aaditya Chavan',
          image: 'https://dummyimage.com/300',
          description: 'Avionics'
        },
        {
            name: 'Arnav Vinod',
            image: 'https://dummyimage.com/300',
            description: 'Avionics'
          },
          {
            name: 'Siddarth Patel',
            image: 'https://dummyimage.com/300',
            description: 'Avionics'
          },
          {
            name: 'Abhinav Suresh',
            image: 'https://dummyimage.com/300',
            description: 'Avionics'
          },
          {
            name: 'Soham Redkar',
            image: 'https://dummyimage.com/300',
            description: 'Avionics'
          },
          {
            name: 'Aarohi Mishra',
            image: 'https://dummyimage.com/300',
            description: 'Communication'
          },
          {
            name : 'Arupta Kamble',
            image : 'https://dummyimage.com/300',
            description : 'Communication'
          },
          {
            name: 'Siya Naulakha',
            image: 'https://dummyimage.com/300',
            description: 'Communication'
          }
        // Add more team members as needed
      ];

      const Mechanical = [
        {
          name: 'Rishikesh Bhintade',
          image: Founder_image, 
          description: 'Head'
        },
        {
          name: 'Riaan Jain',
          image: Associate_Head_image,
          description: 'Structures'
        },
        {
            name: 'Ishan Kakad',
            image: 'https://dummyimage.com/300',
            description: 'Structures'
          },
          {
            name: 'Yash Bagwe',
            image: 'https://dummyimage.com/300',
            description: 'Structures'
          },
          {
            name: 'Aditya Patel',
            image: 'https://dummyimage.com/300',
            description: 'Propulsions'
          },
          {
            name: 'Aashta Shah',
            image: 'https://dummyimage.com/300',
            description: 'Propulsions'
          },
          {
            name: 'Debarpan Dasgupta',
            image: 'https://dummyimage.com/300',
            description: 'Propulsions'
          },
          {
            name : 'Rabiya Darvesh',
            image : 'https://dummyimage.com/300',
            description : 'Recovery'
          },
          {
            name: 'Mridul Bindal',
            image: 'https://dummyimage.com/300',
            description: 'Recovery'
          }
        // Add more team members as needed
      ];

      const Business = [
        {
          name: 'Vidita Hassani',
          image: 'https://dummyimage.com/300',
          description: 'Business Head'
        },
        {
          name: 'Tanisha Mukherjee',
          image: Operations_Head_image,
          description: 'Operations Manager'
        },
        {
            name: 'Aayushi Wani',
            image: 'https://dummyimage.com/300',
            description: 'Creative Executive'
          },
          {
            name: 'Akshita Shetty',
            image: 'https://dummyimage.com/300',
            description: 'Creative'
          },
          {
            name: 'Vruddhi Mule',
            image: 'https://dummyimage.com/300',
            description: 'Creative'
          },
          {
            name: 'Sameer Morya',
            image: 'https://dummyimage.com/300',
            description: 'Creative'
          },
          {
            name: 'Charu Malp',
            image: 'https://dummyimage.com/300',
            description: 'Creative'
          },
          {
            name : 'Likhita Reddy',
            image : 'https://dummyimage.com/300',
            description : 'Creative'
          },
          {
            name: 'Aniket Iyer',
            image: 'https://dummyimage.com/300',
            description: 'Logistics Head'
          },
          {
            name: 'Aditi Gupta',
            image: 'https://dummyimage.com/300',
            description: 'Logistics'
          },
          {
            name: 'Tanrini Bambolkar',
            image: 'https://dummyimage.com/300',
            description: 'Logistics'
          },
          {
            name: 'Vraj Patel',
            image: 'https://dummyimage.com/300',
            description: 'Logistics'
          },
          {
            name: 'Minit Shah',
            image: 'https://dummyimage.com/300',
            description: 'Marketing Executive'
          },
          {
            name: 'Shrusti Vora',
            image: 'https://dummyimage.com/300',
            description: 'Jt Marketing Executive'
          },
          {
            name: 'Joyeeta Basu',
            image: 'https://dummyimage.com/300',
            description: 'Marketing and Publicity'
          },
          {
            name: 'Varun Shah',
            image: 'https://dummyimage.com/300',
            description: 'Marketing and Publicity'
          },
          {
            name: 'Anusha Sarkar',
            image: 'https://dummyimage.com/300',
            description: 'Marketing and Publicity'
          },
          {
            name: 'Rishi Shanbhag',
            image: 'https://dummyimage.com/300',
            description: 'Marketing and Publicity'
          },
          {
            name: 'Mann Dutiya',
            image: 'https://dummyimage.com/300',
            description: 'Marketing and Publicity'
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
                        <p className='description'>{member.description}</p>
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
                        <p className='description'>{member.description}</p>
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
            {Electronics.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        <p className='description'>{member.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>

            <ul aria-hidden="true" className="marquee__content">
            {Electronics.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        <p className='description'>{member.description}</p>
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
            {Mechanical.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        <p className='description'>{member.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>

            <ul aria-hidden="true" className="marquee__content">
            {Mechanical.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        <p className='description'>{member.description}</p>
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
            {Business.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        <p className='description'>{member.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>

            <ul aria-hidden="true" className="marquee__content">
            {Business.map((member, index) => (
              <li key={index}>
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-front">
                        <img src={member.image} alt={member.name} className='team-member-image' />
                    </div>
                    <div className="card-back">
                      <div className="card-back-content">
                        <h2 className='name'>{member.name}</h2>
                        <p className='description'>{member.description}</p>
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
