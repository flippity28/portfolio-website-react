import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import WeatherAppImage from "./images/weather-app-img.jpg"
import WeatherAppReactImage from "./images/weather-app-react-img.jpg"
import PortfolioImage from "./images/portfolio-img.jpg"

export default function Project(){ return(
  <div className="projects" id="projects">
    <div className="container">
      
      <div className="row">
        
        <div className="col-1"></div>
        <div className="block col-10">
          <h1>Projects</h1>
        <Carousel>
  <Carousel.Item>
    <div className ="carousel-container">
   <a href="https://optimistic-babbage-91afd3.netlify.app/" target="_blank" rel="noreferrer"> <img
      className="d-block w-100"
      src={WeatherAppImage}
      alt="Weather App"
    /></a><div className="carousel-tooltip"> Click to view project </div></div>
    <Carousel.Caption>
            <div className="project-title">Weather App</div>
      <div className="project-description">I created this Weather App as my final project on the SheCodes Plus course.</div>
      <div>
      HTML - CSS - Javascript - Bootstrap - API</div>
      <div> View on <a class="github-link" href="https://github.com/flippity28/Weather-app" target="_blank" rel="noreferrer">GitHub</a></div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className ="carousel-container">
   <a href="https://amazing-kowalevski-4be0cd.netlify.app/" target="_blank" rel="noreferrer"> <img
      className="d-block w-100"
      src={WeatherAppReactImage}
      alt="React Weather App"
    /></a><div className="carousel-tooltip"> Click to view project </div></div>
    <Carousel.Caption>
            <div className="project-title">React Weather App</div>
      <div className="project-description">I created this Weather App as my final project on the SheCodes React course.</div>
      <div>
      HTML - CSS - Bootstrap - API - React - npm</div>
      <div> View on <a class="github-link" href="https://github.com/flippity28/weather-app-react" target="_blank" rel="noreferrer">GitHub</a></div>
    </Carousel.Caption>
   
  </Carousel.Item>
  <Carousel.Item>
     <div className ="carousel-container">
   <a href="https://practical-northcutt-3cd937.netlify.app/" target="_blank" rel="noreferrer"> <img
      className="d-block w-100"
      src={PortfolioImage}
      alt="Portfolio Website"
    /></a><div className="carousel-tooltip"> Click to view project </div></div>
    <Carousel.Caption>
            <div className="project-title">Portfolio Website</div>
      <div className="project-description">Having enjoyed the SheCodes course so much I decided to continue coding and create my portfolio website. </div>
      <div>
      HTML - CSS - Bootstrap - React - npm</div>
      <div> View on <a class="github-link" href="" target="_blank" rel="noreferrer">GitHub</a></div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       
         
    </div></div> </div></div>)}