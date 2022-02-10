import React from 'react';
import project1 from '../assets/project1_black.png';
import project2 from '../assets/project2_black.png';
import project3 from '../assets/project3_black.png';
import project4 from '../assets/project4_black.png';

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
                  <a href="https://github.com/pawanpdn-671/weather-app" className='github-link'>Github Link</a>
                  <a href="https://pawanpdn-671.github.io/weather-app" className='open-proj-btn'>Open Project</a>
               </div>
            </div>

            <div className='project project2'>
               <div className='link-block'>
                  <p className='project-short-detail'><span className='mark'>Movie App - </span>It is developed with HTML, CSS and Javascript(ES6). It renders movies according to the category and if we click on a movie thumbnail, it will show related videos below that thumbnail. It also has a search feature to search for a movie.</p>
                  <div className='tech-used-container'>
                     <span className='tag'>HTML</span>
                     <span className='tag'>CSS</span>
                     <span className='tag'>JavaScript(ES6)</span>
                  </div>
                  <a href="https://github.com/pawanpdn-671/Movie-app" className='github-link'>Github Link</a>
                  <a href="https://pawanpdn-671.github.io/Movie-app" className='open-proj-btn'>Open Project</a>
               </div>
               <img src={project2} alt="project" />
            </div>

            <div className='project project3'>
               <img src={project3} alt="project" />
               <div className='link-block'>
                  <p className='project-short-detail'><span className='mark'>Portfolio - </span>Here comes my own personal portfolio, which is built with ReactJS. It is simple and elegant, black-white theme portfolio. The designs are pretty simple. The idea of this portfolio was to show that I can built something simple and beautiful.</p>
                  <div className='tech-used-container'>
                     <span className='tag'>React</span>
                     <span className='tag'>CSS</span>
                  </div>
                  <a href="https://github.com/pawanpdn-671/portfolio" className='github-link'>Github Link</a>
                  <a href="/" className='open-proj-btn'>Open Project</a>
               </div>
            </div>

            <div className='project project4'>
               <div className='link-block'>
                  <p className='project-short-detail'><span className='mark'>Todo App - </span>It is a fully-functional Todo App. We can create a project and we can create a todo with the given date and time. We can also edit a todo or delete it same goes for the project. The data is store in firebase, so the todos can be remained for one week.</p>
                  <div className='tech-used-container'>
                     <span className='tag'>React</span>
                     <span className='tag'>Firebase</span>
                     <span className='tag'>Material UI</span>
                     <span className='tag'>Bootstrap</span>
                  </div>
                  <a href="https://github.com/pawanpdn-671/todo-app" className='github-link'>Github Link</a>
                  <a href="https://pawanpdn-671.github.io/todo-app" className='open-proj-btn'>Open Project</a>
               </div>
               <img src={project4} alt="project" />
            </div>
         </div>
      </section>
   )
}

export default Section1;
