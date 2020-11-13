import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';


export default function Contact(){return(
<div className="contact" id="contact">
    <div class="container">
      <div className="row"> <div className="block col-10"><h1>Contact me</h1>
      <div>Want to know more? Need a website for your business? Want to talk coding? Get in touch!</div>
      <ScrollAnimation animateIn="fadeIn">
          <div className="row symbols">
          
  <div className="col-4">
      <a href="https://www.linkedin.com/in/felicity-child-13b00182/" target="_blank" rel="noreferrer">
          <button ><i class="fab fa-linkedin"></i></button></a></div>
      <div className="col-4">
          <a href="mailto:felicity.child@gmail.com?subject=Website Enquiry" target="_blank" rel="noreferrer">
              <button><i class="fas fa-envelope-open-text"></i></button></a></div>
      <div className="col-4"><a href="https://github.com/flippity28" target="_blank" rel="noreferrer"><button> <i class="fab fa-github"></i></button></a></div>
      </div></ScrollAnimation>


       
    </div></div> </div></div>
 
  )}