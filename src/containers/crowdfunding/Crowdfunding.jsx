import React from 'react'
import './CrowdFunding.css'
import { useCursorContext } from '../../components/cursor/CursorContext';
import { motion } from 'framer-motion';

function Crowdfunding() {
    const { variants, cursorVariant, textEnter, textLeave } = useCursorContext();
  return (
    <>
    <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}/>
    <div className='crowd-funding-container'>
        <div className="crowd-funding-container__left">
            <h1 className="crowdfunding-heading" onMouseEnter={textEnter} onMouseLeave={textLeave}>Introduction</h1>
            <div className="crowd-funding-content">
                <p>Our crowdfunding campaign is a way to raise funds for our upcoming projects. We are a non-profit organization, and we rely on the generosity of our donors to fund our projects. Our crowdfunding campaign is a way for us to reach out to a wider audience and raise funds for our projects. We are grateful for any support that we receive, and we are committed to using the funds that we raise to make a positive impact in the world.</p>
            </div>
        </div>
        <div className="crowd-funding-container__right">
            <div className="crowd-funding-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="SSRP video" />
            </div>
        </div>
    </div>
    <div className='crowd-funding-investments'>
        <div className='raised'>
            <div className='money'>₹100K</div>
            <div className='raised-text'onMouseEnter={textEnter} onMouseLeave={textLeave}>Raised</div>
        </div>
        <div className='investors'>
            <div className='investors-count'>100</div>
            <div className='investors-text'onMouseEnter={textEnter} onMouseLeave={textLeave}>Investors</div>
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
        <div className="crowdfunding-heading"onMouseEnter={textEnter} onMouseLeave={textLeave}>Google Form</div>
        <div className="google-form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScLvn9j4LvX4-fnkcxXp89dGAKhJaUJBWF2-0eCat2UGxScTQ/viewform" height={"100%"} width={"100%"} title="SSRP Google Form"></iframe>
        </div>
    </div>
    </>
  )
}

export default Crowdfunding