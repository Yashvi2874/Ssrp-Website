import React from 'react'
import './TeamNew.css'
import Faculty from '../../assests/images/Community/Members/Comps/Mit_Mhatre.jpg'
import Team from '../../assests/images/Community/Team.jpg'

function TeamNew() {
  return (
    <div className='TeamNew'>
        <div className='team-container'>
            <img src={Team}  className='team-image' alt='XYZ'/>
            <div className='team-overlay'>
            <h1 className='team-heading'>Team</h1>
            <description className='team-description'>Meet the team behind the scenes</description>
            <div className='arrow-down'> Down Arrow </div>
            </div>
        </div>
        <div className="facultyAdvisors">
            <section className='section-title'>Faculty Advisors</section>
            <img src={Faculty} alt='XYZ' className='member-image'/>
            <div className='member-name'>Dr Paul</div>
        </div>        
    </div>
  )
}

export default TeamNew