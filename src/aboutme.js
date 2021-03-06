import React from "react"
import PIC from "./images/pic2.jpg"
import Menu from "./menu.js"

export default function AboutMe (){return(
<div className="about-me" id="about-section">
  <Menu />
  <div class="container">
      <div className="row">
      
       
        <div className="block col-10">
          <h1>About me</h1>
          <div className="row">
                   
          <div className ="col about-me-text">
            <img src={PIC} alt="about_me_img" id="profile-photo"/>
            My name is Felicity, but I'm often known as Flip. I'm an aspiring
            Front End / Web Developer from Hampshire, UK. I have a Masters
            degree in Chemistry and 8 years' experience developing new products
            in the polyester and security industries. As rewarding and interesting
            as my early career has been, when I moved south to be with my
            partner I ended up stuck in a rut with my career and decided
            something had to change. That's when I decided to learn to code.
            Having researched self-learning and bootcamp options, in August 2020
            I took my first SheCodes course, 'Introduction to Coding', and
            from there I was hooked. I went on to complete the SheCodes Plus
            course and the SheCodes React course. Here I am today building my own website / portfolio...</div>
        </div>
       
          <div className="row skills-section">
            <div className="col-4">
              <h3>Coding skills</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>VS code</li>
                <li>API</li>
                <li>React / JSX</li>
              </ul>
            </div>
            <div className="col-4">
              <h3>Other skills</h3>
              <ul>
                <li>Project management</li>
                <li>Leadership</li>
                <li>Problem solving</li>
                <li>Data analysis</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Presentation</li>
                <li></li>
              </ul>
            </div>
            <div className="col-4">
              <h3>Hobbies and interests</h3>
              <ul>
                <li>Crossfit</li>
                <li>Hiking</li>
                <li>Baking</li>
                <li>Erwin 😻</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
 
  )}