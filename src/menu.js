import React, {useState} from "react";


export default function Menu(){
 const [nav, openNav]= useState(false)

function showMenu (event){event.preventDefault();
  if (nav){openNav(false)} else {
openNav(true)}}

function hideMenu (){
  if (nav){openNav(false)} else {
openNav(true)}}


if (nav) {
return(
      <div className="side-menu col-1">
        <div classname="row"><button onClick={showMenu}><i class="fas fa-times"></i></button></div>
          <div className="row menu-link">
            <a  id="about-me-link" href="#about-section"><button class="link-button" onClick={hideMenu}>About</button></a>
          </div>
          <div className="row menu-link">
            <a id="projects-link" href="#projects"><button class="link-button" onClick={hideMenu}>Projects</button></a>
          </div>
          <div className="row menu-link"><a id="contact-link" href="#contact"><button class="link-button" onClick={hideMenu}>Contact</button></a></div>
          
        </div>
    
)} else {return(<div className="side-menu col-1">
        <div classname="row"><button onClick={showMenu}><i class="fas fa-bars"></i></button></div>
          
        </div>)}
    
}