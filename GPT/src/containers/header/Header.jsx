import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
   <>
   <div className="gpt3__header section__padding" id='home'>
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Lets build something amazing with GPT-3 OpenAI
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto magnam laboriosam omnis minus ad molestias, a dolorum hic reprehenderit illo suscipit voluptatem repellendus perferendis iure veritatis unde ipsum explicabo alias!
      </p>
      <div className="gpt3__header-content__input">
        <input type="email" name="" id=""placeholder='email' />
        <button type='button'>Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} alt="" />
        <p>1500 people requested access in the last 24 hours</p>
      </div>
     
    </div>
    <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
   </div>
   </>
  )
}

export default Header