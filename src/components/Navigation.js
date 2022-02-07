import React from 'react'
import pdf from "../assets/pawan_resume_v2.pdf";

function Navigation() {

   window.addEventListener('scroll', () => {
      let navigationSection = document.querySelector('.navigation-section');
      let resumeBtn = document.querySelector('.resume-block');
      const subMenuItems  = document.querySelectorAll('.sub-menu-item');
      const menu_item_strip1 = document.querySelectorAll('.first-half-strip');
      const menu_item_strip2 = document.querySelectorAll('.second-half-strip');

      navigationSection.classList.toggle('sticky-nav', window.scrollY > 0);
      resumeBtn.classList.toggle('updated-resume-block', window.scrollY > 0);
      if(window.scrollY > 0){
         document.querySelector('.logo').style.color="var(--white)";
         
         for(let i = 0; i < subMenuItems.length; i++){
            subMenuItems[i].style.color="var(--white)";
         }
         for(let i = 0; i < menu_item_strip1.length; i++){
            menu_item_strip1[i].style.backgroundColor="var(--white)";
         }
         for(let i = 0; i < menu_item_strip2.length; i++){
            menu_item_strip2[i].style.backgroundColor="var(--white)";
         }

      }else{
         document.querySelector('.logo').style.color="var(--black)";
         
         for(let j = 0; j < subMenuItems.length; j++){
            subMenuItems[j].style.color="var(--black)";
         }
         for(let i = 0; i < menu_item_strip1.length; i++){
            menu_item_strip1[i].style.backgroundColor="var(--grey)";
         }
         for(let i = 0; i < menu_item_strip2.length; i++){
            menu_item_strip2[i].style.backgroundColor="var(--grey)";
         }
      }
   })

   return (
      <div className='navigation-section'>
         <div className='nav-block'>
            <div className="logo-box">
               <h3 className='logo'>PawanPdn</h3>
            </div>

            <nav id="navbar">
               <a className='sub-menu-item' href="#header"><span className='first-half-strip'></span> Home <span className='second-half-strip'></span></a>

               <a className='sub-menu-item' href="#about-section"><span className='first-half-strip'></span>About<span className='second-half-strip'></span></a>

               <a className='sub-menu-item' href="#projects-section"><span className='first-half-strip'></span>Projects<span className='second-half-strip'></span></a>

               <a className='sub-menu-item' href="#contact-section"><span className='first-half-strip'></span>Contact<span className='second-half-strip'></span></a>
            </nav>

            <a href={pdf} target="_blank" rel='noreferrer' className='resume-block'>
               <i className="fas fa-download"></i>
               <span className='text'>Resume</span>
            </a>

            
         </div>
      </div>
   )
}

export default Navigation;
