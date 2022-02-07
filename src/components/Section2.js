import React from 'react';
import myImg from '../assets/blacked.jpg';

function Section2() {
   return (
      <section id="about-section">
         <div className='about-me-container'>
            <div className='section-heading-container'>
               <span className='text-heading-box'>A bit about me</span>
               <span className='line-after-box'></span>
            </div>

            <div className='about-me-details-and-img'>
               <div className='about-me-details-block'>
                  <p className='details'>
                     Hello! My name is Pawan Pradhan. I currently live in East Siang District, Arunachal Pradesh, India. I have studied till my high school, and shortly after that I decided to spend all of my time in Web Development. <br/> <br/>
                     I started my journey with C programming language as my base, and it really helped me throughout learning Javascript. I really like the frontend stuffs, especially animations, effects and frontend functionalities. My hobbies includes Playing Online Games, Watching Videos and sometimes Badminton. And so that's all about me in a nutshell.
                     <br/> <br/>
                     <span>Technologies I've worked with:</span> 
                  </p>

                  <div className='skills-container'>
                     <div className='skill-box'>
                        <i className="fas fa-caret-right"></i>  
                        <span className='skill'>C(DSA)</span>
                     </div>

                     <div className='skill-box'>
                        <i className="fas fa-caret-right"></i>
                        <span className='skill'>HTML</span>
                     </div>

                     <div className='skill-box'>
                        <i className="fas fa-caret-right"></i>
                        <span className='skill'>CSS</span>
                     </div>

                     <div className='skill-box'>
                        <i className="fas fa-caret-right"></i>
                        <span className='skill'>Javascript(ES6)</span>
                     </div>

                     <div className='skill-box'>
                        <i className="fas fa-caret-right"></i>
                        <span className='skill'>React</span>
                     </div>

                     <div className='skill-box'>
                        <i className="fas fa-caret-right"></i>
                        <span className='skill'>Tailwind</span>
                     </div>
                  </div>
               </div>

               <div className='about-me-img-block'>
                  <img src={myImg} alt="Pawan Pradhan" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Section2;
