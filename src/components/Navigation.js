import React, {useState} from 'react'
import pdf from "../assets/pawan_resume_v2_compress.pdf";

function Navigation() {
   const [menuOpen, setMenuOpen] = useState(false);

   const openMenu = () => {
      let bars = document.querySelectorAll('.bar');
      
      if(!menuOpen){
         document.querySelector('.hamburger-menu').classList.add('icon');
         document.querySelector('#navbar').style.display="flex";
         document.querySelector('#navbar').classList.remove('reverse-nav');
         document.querySelector('#navbar').classList.add('animate-nav');

         for(let i = 0; i < bars.length; i++){
            bars[i].style.backgroundColor="var(--white)";
         }

         setMenuOpen(true);
      }
      else{
         document.querySelector('.hamburger-menu').classList.remove('icon');
         document.querySelector('#navbar').classList.remove('animate-nav');
         document.querySelector('#navbar').classList.add('reverse-nav');

         if(window.scrollY <= 0){
            for(let i = 0; i < bars.length; i++){
               bars[i].style.backgroundColor="var(--black)";
            }
         }

         setTimeout(() => {
            document.querySelector('#navbar').style.display="none";

         }, 300)

         setMenuOpen(false);
      }
   }

   window.addEventListener('scroll', () => {
      let navigationSection = document.querySelector('.navigation-section');
      let resumeBtn = document.querySelector('.resume-block');
      const subMenuItems  = document.querySelectorAll('.sub-menu-item');
      const menu_item_strip1 = document.querySelectorAll('.first-half-strip');
      const menu_item_strip2 = document.querySelectorAll('.second-half-strip');
      let bars = document.querySelectorAll('.bar');
      

      navigationSection.classList.toggle('sticky-nav', window.scrollY > 0);
      resumeBtn.classList.toggle('updated-resume-block', window.scrollY > 0);
      if(window.scrollY > 0){
         document.querySelector('.logo').style.color="var(--white)";

         for(let i = 0; i < bars.length; i++){
            bars[i].style.backgroundColor="var(--white)";
         }
         
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

         if(!menuOpen){
            for(let i = 0; i < bars.length; i++){
               bars[i].style.backgroundColor="var(--black)";
            }
         }else{
            for(let i = 0; i < bars.length; i++){
               bars[i].style.backgroundColor="var(--white)";
            }
         }

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

            <div className='hamburger-menu' onClick={openMenu}>
               <div className='bar bar1'></div>
               <div className='bar bar2'></div>
            </div>
         </div>
      </div>
   )
}

export default Navigation;
