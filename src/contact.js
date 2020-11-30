import React, {useState} from "react";
import ScrollAnimation from 'react-animate-on-scroll';


export default function Contact(){
   const [form, changeForm]=useState(false) 

    function showForm(event){event.preventDefault();
        changeForm(true)}
 function closeForm(event){event.preventDefault();
        changeForm(false)}

if (form) {return (<div className="contact" id="contact">
    <div class="container">
      <div className="row"> <div className="block col-10"><h1>Contact me</h1>
      <div>Want to know more?</div>
      <div>Need a website for your business?</div> 
      <div>Looking for a Front End Developer to join your team?</div> 
      <div className="contact-pulse">Get in touch!</div>
     
   <form><div><label>Name: </label><input type="text"></input></div>
   <div><label>Email Address:</label><input type="email"></input></div>
   <div><input type="submit"></input><button onClick={closeForm}>close</button></div></form>


       
    </div></div> </div></div>
 
  );}

else {return(
   
<div className="contact" id="contact">
    <div class="container">
      <div className="row"> <div className="block col-10"><h1>Contact me</h1>
      <div>Want to know more?</div>
      <div>Need a website for your business?</div> 
      <div>Looking for a Front End Developer to join your team?</div> 
      <div className="contact-pulse">Get in touch!</div>
     
      <ScrollAnimation animateIn="fadeIn">
          <div className="row symbols">
          
  <div className="col-4">
      <a href="https://www.linkedin.com/in/felicity-child-13b00182/" target="_blank" rel="noreferrer">
          <button className="contact-btn"><i class="fab fa-linkedin"></i></button></a></div>
      <div className="col-4">
          <a href="mailto:felicity.child@gmail.com?subject=Website Enquiry" target="_blank" rel="noreferrer">
              <button className="contact-btn" onClick={showForm}><i class="fas fa-envelope-open-text"></i></button></a></div>
      <div className="col-4"><a href="https://github.com/flippity28" target="_blank" rel="noreferrer"><button className="contact-btn"> <i class="fab fa-github"></i></button></a></div>
      </div></ScrollAnimation>


       
    </div></div> </div></div>
 
  )}}