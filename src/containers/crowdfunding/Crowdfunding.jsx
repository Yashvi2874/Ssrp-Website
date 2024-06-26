import React from 'react'
import './CrowdFunding.css'

function Crowdfunding() {
  return (
    <>
    <div className='crowd-funding-container'>
        <div className="crowd-funding-container__left">
            <h1 className="crowdfunding-heading">Introduction</h1>
            <div className="crowd-funding-content">
                <p>Our crowdfunding campaign is a way to raise funds for our upcoming projects. We are a non-profit organization, and we rely on the generosity of our donors to fund our projects. Our crowdfunding campaign is a way for us to reach out to a wider audience and raise funds for our projects. We are grateful for any support that we receive, and we are committed to using the funds that we raise to make a positive impact in the world.</p>
            </div>
        </div>
        <div className="crowd-funding-container__right">
            <div className="crowd-funding-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
        </div>
    </div>
    <div className='crowd-funding-investments'>
        <div className='raised'>
            <div className='money'>₹100K</div>
            <div className='raised-text'>Raised</div>
        </div>
        <div className='investors'>
            <div className='investors-count'>100</div>
            <div className='investors-text'>Investors</div>
        </div>
    </div>
    {/* <div className="crowdfunding-investors">
        <div className="crowdfunding-heading">Our Investors</div>
        <div className="crowdfunding-investors-list">
            <div className="investor">
                <img src="https://via.placeholder.com/100" alt="Investor" className="investor-image" />
                <div className="investor-name">John Doe</div>
                <div className="investor-amount">₹1000</div>
            </div>
            <div className="investor">
            <img src="https://via.placeholder.com/100" alt="Investor" className="investor-image" />
                <div className="investor-name">Jane Doe</div>
                <div className="investor-amount">₹500</div>
            </div>
            <div className="investor">
            <img src="https://via.placeholder.com/100" alt="Investor" className="investor-image" />
                <div className="investor-name">John Smith</div>
                <div className="investor-amount">₹200</div>
            </div>
            <div className="investor">
            <img src="https://via.placeholder.com/100" alt="Investor" className="investor-image" />
                <div className="investor-name">Jane Smith</div>
                <div className="investor-amount">₹100</div>
            </div>
        </div>
    </div> */}
    <div className="crowdfunding-googleform">
        <div className="crowdfunding-heading">Google Form</div>
        <div className="google-form">
            Google form here
        </div>
    </div>
    </>
  )
}

export default Crowdfunding