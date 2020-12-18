import React, {useState} from "react";
import axios from "axios";
import ScrollAnimation from 'react-animate-on-scroll';

  

export default function Contact(){
   const [form, changeForm]=useState(false) 
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [message, setMessage] = useState("")
        
        


    function showForm(event){event.preventDefault();
        changeForm(true)}
 function closeForm(event){event.preventDefault();
        changeForm(false)}
        function updateName(event){setName (event.target.value)}
        function updateEmail(event) {setEmail(event.target.value)}
        function updateMessage(event) {setMessage(event.target.value)}
        const API_PATH = 'http://localhost:1992/portfolio-website-react/index.php';
        function handleSubmit(event){event.preventDefault()
          console.log([name, email, message])
          axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: { 'content-type': 'application/json' },
    data: [name, email, message]
  })
         }

if (form) {return (<div className="contact" id="contact">
    <div class="container">
      <div className="row"> <div className="block col-10"><h1>Contact me</h1>
          
   <form onSubmit={handleSubmit}><div><label>Name</label><div><input type="text" onChange={updateName}></input></div></div>
   <div className="form-inputs"><label>Email Address</label><div><input type="email" onChange={updateEmail}></input></div></div>
   <div className="form-inputs"><label>Enquiry</label> <div><textarea row="10" cols="50" onChange={updateMessage}></textarea></div></div>
   <div><input className="btn" type="submit"></input><button className="btn" onClick={closeForm}>Close</button></div></form>


       
    </div></div> </div></div>
 
  );}

else {return(
   
<div className="contact" id="contact">
    <div className="container">
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