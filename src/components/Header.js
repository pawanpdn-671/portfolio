import React from 'react'

function Header({ children }) {
   return (
      <header id="header">
         {children}
         <i className="far fa-hand-point-down scroll-pointer"></i>
      </header>
   )
}

export default Header;
