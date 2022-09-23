import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <>
    <div className="gpt3__whatgpt3 section__margin" id='whatGPT3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title='What is GPT-3' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corrupti rerum sunt iste unde debitis sit aperiam atque. Laboriosam voluptate omnis error distinctio aut et odio consectetur eos architecto quasi."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities are beyound your imaginations
        </h1>
        <p>Explore the Library</p>
        

      </div>
<div className="gpt3__whatgpt3-container">
  <Feature title='Chatbots' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corrupti rerum sunt iste unde debitis sit aperiam atque. Laboriosam voluptate omnis error distinctio aut et odio consectetur eos architecto quasi."/>
  <Feature title='Knowledge Base' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corrupti rerum sunt iste unde debitis sit aperiam atque. Laboriosam voluptate omnis error distinctio aut et odio consectetur eos architecto quasi."/>
  <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corrupti rerum sunt iste unde debitis sit aperiam atque. Laboriosam voluptate omnis error distinctio aut et odio consectetur eos architecto quasi."/>
</div>
 </div>
    </>
  )
}

export default WhatGPT3