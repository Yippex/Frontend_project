import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <>
    <div className="gpt3__possibility section__padding" id='possibility'>
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request access early to get started</h4>
      <h1 className='gradient__text'>The possibilities are beyond our imagination</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste deserunt enim similique sapiente minus nam quia illo commodi! Excepturi repudiandae rerum, illum odit ab consectetur fugiat laudantium delectus quae.</p>
      <h4>Request early access to get started</h4>
    </div>

    </div>
    </>
  )
}

export default Possibility