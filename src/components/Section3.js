import React from 'react'
import contact from '../assets/contact.png'

function Section3() {

   const handleMouseEnter = (e) => {
      if(e.target.children[0].classList.contains('fa-envelope')){
         e.target.children[0].classList.remove('fa-envelope');
         e.target.children[0].classList.add('fa-envelope-open');
      }
   }

   const handleMouseLeave = (e) => {
      if(e.target.children[0].classList.contains('fa-envelope-open')){
         e.target.children[0].classList.remove('fa-envelope-open');
         e.target.children[0].classList.add('fa-envelope');
      }
   }

   return (
      <section id="contact-section">
         <div className='contact-container'>
            <div className='section-heading-container'>
               <span className='text-heading-box'>Get in Touch</span>
               <span className='line-after-box'></span>
            </div>

            <div className='contact-and-img-wrapper'>
               <div className='contact-info-container'>
                  <p className='contact-info-container-subtext'>If you have any questions, feel free to contact me by the info provided below. <br />
                  I'll reply to your message as soon as possible.</p>

                  <div className='contact-info-box'>
                     <a className='email_btn' href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pawanpradhanpc671@gmail.com" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><i className="far fa-envelope"></i>Send an email</a>

                     <span>OR</span>

                     <a className='call_btn' href="tel: +91 6009404703"><i className="fas fa-phone"></i>Voice call</a>
                  </div>
               </div>

               <div className='contact-img-block'>
                  <img src={contact} alt="contact info" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Section3;
