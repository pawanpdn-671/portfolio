import React from 'react'

function Footer() {
   return (
      <footer id="footer">
         <div className='footer-info-wrapper'>
            <div className='footer-info-box1'>
               <p className='text'>Designed & Built by <span>Pawan Pradhan</span> </p>
            </div>

            <div className='footer-info-box2'>
               <div className='social-link-box'>
                  <a href="https://github.com/pawanpdn-671"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/pawan-pradhan-363482221/"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.instagram.com/pawanpdn/"><i className="fab fa-instagram"></i></a>
               </div>

               <div className='support-box'>
                  <a href="https://www.buymeacoffee.com/pawanpradhan"><i className="fas fa-coffee"></i>Buy me a coffee </a>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;
