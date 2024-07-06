import React from 'react'
import './NewHome.css'

function NewHome() {

  return (
    <>
    <div className='new-home-container' style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }}>
        <video autoPlay loop muted style={{
            width: '100%',
        }}>
            <source src="/assets/earth.mp4" type="video/mp4" />
        </video>
        <div className="home-content" style={{
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            width: '100%',
        
        }}> 

        <div class="container">
            <div class="upper">SSRP</div>
            <div class="lower">SSRP</div>
            <div class="inside">Somaiya Space Research Project</div>
        </div>
            {/* <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div style={{
                fontSize: '12vw',
                color: 'white',
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
                textAlign: 'center',
                justifyContent: 'center',

            }}>SSRP
            <div style={{
                fontSize: '2.1vw',
                color: 'white',
                fontFamily: 'Montserrat',
                backgroundColor: 'black',
                position: 'relative',
                top: '-10vw',
            }}>Somaiya Space Research Project</div></div>
            </div> */}
            
            <div  className = "Slogan" style={{
                textAlign: 'center',           
            }}>Launching dreams into orbits</div>
            </div>
        </div>
    
    </>
  )
}

export default NewHome