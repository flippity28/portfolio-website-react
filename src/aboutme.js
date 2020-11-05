import React from "react"
import PIC1 from "./images/pic1.png"

export default function AboutMe (){return(<div className="about-me" id="about-section"><div class="container">
      <div className="row">
        <div className="side-menu col-1">
          <div className="row">
            <a  id="about-me-link" href="#about-section">About me</a>
          </div>
          <div className="row">
            <a id="projects-link" href="#projects">Projects</a>
          </div>
          <div className="row"><a id="contact-link" href="#contact">Contact</a></div>
          <div className="row"><a id="blog-link" href="#blog">Blog</a></div>
        </div>
        <div className="col-1"></div>
        <div className="block col-9">
          <h1>About me</h1>
          <div className="row">
          <div className="col-3"><img src={PIC1} alt="about_me_img" id="profile-photo"/></div>

          <div className ="col-9 about-me-text">
            My name is Felicity, but I'm often known as Flip. I'm an aspiring
            Front End / Web Developer from Hampshire, UK. I have a Masters
            degree in Chemistry and 8 years' experience developing new products
            in the polyester and security industries. As rewarding and interesting
            as my early career has been, when I moved south to be with my
            partner I ended up stuck in a rut with my career and decided
            something had to change. That's when I decided to learn to code.
            Having researched self-learning and bootcamp options, in August 2020
            I took my first SheCodes course, the 'Introduction to Coding' and
            from there I was hooked. I went on to complete the SheCodes Plus
            course and the SheCodes React course.</div>
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
                <li>My cat, Erwin 😻</li>
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