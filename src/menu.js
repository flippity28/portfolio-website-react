import React, {useState} from "react";


export default function Menu(){
 const [nav, openNav]= useState(false)

function showMenu (event){event.preventDefault();
  if (nav){openNav(false)} else {
openNav(true)}}
let menuButton = <button onClick={showMenu}><i class="fas fa-bars"></i></button>;
if (nav) {
return(
      <div className="side-menu col-1">
        <div classname="row">{menuButton}</div>
          <div className="row">
            <a  id="about-me-link" href="#about-section"><button class="link-button">About me</button></a>
          </div>
          <div className="row">
            <a id="projects-link" href="#projects"><button class="link-button">Projects</button></a>
          </div>
          <div className="row"><a id="contact-link" href="#contact"><button class="link-button">Contact</button></a></div>
          <div className="row"><a id="blog-link" href="#blog"><button class="link-button">Blog</button></a></div>
        </div>
    
)} else {return(<div className="side-menu col-1">
        <div classname="row">{menuButton}</div>
          
        </div>)}
    
}