import React from 'react';
import project1 from '../assets/project1.png';

function Section1() {
   return (
      <section id="projects-section">
         <div className='projects_section_heading_container'>
            <div className='section-heading-container'>
               <span className='text-heading-box'>Things I've Built</span>
               <span className='line-after-box'></span>
            </div>
         </div>
         
         <div className="projects-wrapper">
            <div className='project project1'>
               <img src={project1} alt="project" />
               <div className='link-block'>
                  <p className='project-short-detail'><span className='mark'>Weather App - </span>It is developed with HTML, CSS and Javascript(ES6). It helps to get the weather information based on the current city of the user. We can also get the information of another cities with its search feature. The information is based on OpenWeather API.</p>
                  <div className='tech-used-container'>
                     <span className='tag'>HTML</span>
                     <span className='tag'>CSS</span>
                     <span className='tag'>JavaScript(ES6)</span>
                  </div>
                  <a href="#" className='github-link'>Github Link</a>
                  <a href="#" className='open-proj-btn'>Open Project</a>
               </div>
            </div>

            <div className='project project2'>
               <div className='link-block'>
                  <p className='project-short-detail'><span className='mark'>Weather App - </span>It is developed with HTML, CSS and Javascript(ES6). It helps to get the weather information based on the current city of the user. We can also get the information of another cities with its search feature. The information is based on OpenWeather API.</p>
                  <div className='tech-used-container'>
                     <span className='tag'>HTML</span>
                     <span className='tag'>CSS</span>
                     <span className='tag'>JavaScript(ES6)</span>
                  </div>
                  <a href="#" className='github-link'>Github Link</a>
                  <a href="#" className='open-proj-btn'>Open Project</a>
               </div>
               <img src={project1} alt="project" />
            </div>

            <div className='project project3'>
               <img src={project1} alt="project" />
               <div className='link-block'>
                  <p className='project-short-detail'><span className='mark'>Weather App - </span>It is developed with HTML, CSS and Javascript(ES6). It helps to get the weather information based on the current city of the user. We can also get the information of another cities with its search feature. The information is based on OpenWeather API.</p>
                  <div className='tech-used-container'>
                     <span className='tag'>HTML</span>
                     <span className='tag'>CSS</span>
                     <span className='tag'>JavaScript(ES6)</span>
                  </div>
                  <a href="#" className='github-link'>Github Link</a>
                  <a href="#" className='open-proj-btn'>Open Project</a>
               </div>
            </div>

            <div className='project project4'>
               <div className='link-block'>
                  <p className='project-short-detail'><span className='mark'>Weather App - </span>It is developed with HTML, CSS and Javascript(ES6). It helps to get the weather information based on the current city of the user. We can also get the information of another cities with its search feature. The information is based on OpenWeather API.</p>
                  <div className='tech-used-container'>
                     <span className='tag'>HTML</span>
                     <span className='tag'>CSS</span>
                     <span className='tag'>JavaScript(ES6)</span>
                  </div>
                  <a href="#" className='github-link'>Github Link</a>
                  <a href="#" className='open-proj-btn'>Open Project</a>
               </div>
               <img src={project1} alt="project" />
            </div>
         </div>
      </section>
   )
}

export default Section1;
