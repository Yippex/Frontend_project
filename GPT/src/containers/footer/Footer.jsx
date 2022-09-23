import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <>
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="" />
            <p>Block 234 Banax plaza Wuse Abuja, All right Reserved</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overon</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contacts</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms and Condition</p>
            <p>Privacy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Block 234 Banax Plaza Wuse Abuja</p>
            <p>08135206332</p>
            <p>danieldashe90@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2022 GPT-3. All right reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer