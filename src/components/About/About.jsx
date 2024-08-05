import React from 'react'
import './About.css'

function About() {
  return (
   <div className="main">
     <div className='c1'>
        <div className='content'>
           
        <p className='p1'>HustleCoders-Transforming Digital Products</p>
        <p className='p2'>Freelance developer and designer</p>
        <button className='button'>Get in touch</button></div>
        
        </div>
        <div className="about">
           <h1 className='abouth1'> About</h1>
           <div className='aboutimg'>
         <img src="data:image/png;base64,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" alt="jghjg" />
        <div className='aboutcontent'>
        <h1>HUSTLECODERS</h1>
        <p>Freelance devloper and designer based in Chennai.Fleibig connects you with specialized digital services from India through our vibrant team of experienced freelancers. We provide innovative, tailored solutions and out-of-the-box ideas to meet your unique needs and deliver exceptional results.</p></div>
        </div>
        </div>
        
       
    </div>
  )
}

export default About