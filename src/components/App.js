import React from "react";
import "./App.css";
import Header from './Header';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import Main from './Main';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';


const App = () => {


   return (
      <React.Fragment>
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