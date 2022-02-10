import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Header';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import Main from './Main';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';
import HashLoader from "react-spinners/HashLoader"


const App = () => {

   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);

      setTimeout(() => {
         setLoading(false);
         document.querySelector('#loader_container').style.display="none";
      }, 4000);

   }, []);

   window.addEventListener('load', () => window.scrollTo(0,0));

   return (
      <React.Fragment>
         <div id='loader_container'>
            <HashLoader color={"#141414#"} size={50} loading={loading} />
         </div>
         <Header>
         <Navigation />
         <HeroSection />
         </Header>

         <Main>
            <Section1 />
            <Section2 />
            <Section3 />
         </Main>
         <Footer />
      </React.Fragment>
   )
}

export default App;