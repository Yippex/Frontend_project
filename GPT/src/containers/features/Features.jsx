import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData= [{
  title: 'Improve and disburst instantly',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium pariatur odio dolores excepturi est aut perspiciatis sint rem nisi? Laudantium quos minima quod, vel beatae provident dicta quisquam eos.'
},
{
title: 'Become the Tended active',
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium pariatur odio dolores excepturi est aut perspiciatis sint rem nisi? Laudantium quos minima quod, vel beatae provident dicta quisquam eos.'"
},
{
  title: "Message or am nothing",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium pariatur odio dolores excepturi est aut perspiciatis sint rem nisi? Laudantium quos minima quod, vel beatae provident dicta quisquam eos.'"
},
{
  title:"Really low boy country",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium pariatur odio dolores excepturi est aut perspiciatis sint rem nisi? Laudantium quos minima quod, vel beatae provident dicta quisquam eos.'"
}
]

const Features = () => {
  return (
    <>
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>
          The Future is Now And You Just Need to Realize it today.
          Step in the Future Today and make it Happen
        </h1>
        <p>Request early access to get started</p>
      </div>
      <div className="gpt__features-container">
    {featuresData.map((item, index)=>(
      <Feature title={item.title} text={item.text} key={item.title + item.index}/>
    ))}
      </div>
    </div>
    </>
  )
}

export default Features