import React, { useRef, useEffect } from 'react'
import heroImg from '../assets/heroImg.png';

function HeroSection() {
   const textRef = useRef();
   let index = 0;

   function animateText(){
      const animateTexts = textRef.current.children;

      for(let i = 0; i < animateTexts.length; i++){
         animateTexts[i].classList.remove('text-in', 'text-out');
      }
      animateTexts[index].classList.add('text-in');

      setTimeout(() => {
         animateTexts[index].classList.add('text-out');
      }, 2800);
      
      
      setTimeout(() => {
         if(index === animateTexts.length - 1){
            index = 0;
         }else{
            index++;
         }
         animateText();
      }, 3000);
   }

   useEffect(() => {
      animateText();
   });


   return (
      <section id="hero-section">
         <div className="hero-section1">
            <span className="hello-text">Hi, I'm Pawan</span>
            <h1 className='hero-heading'>Creating great website <br/> from the knowledge of</h1>
            <p ref={textRef} className='animate-text-block'>
               <span>Design Principles</span>
               <span>Frontend Coding</span>
               <span>Useful Libraries</span>
            </p>
         </div>

         <div className="hero-section2">
            <img src={heroImg} alt="Working Illustration SVG" />
         </div>
      </section>
      
   )
}

export default HeroSection;
