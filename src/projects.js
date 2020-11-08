import React from "react"
import WeatherAppImage from "./images/weather-app-img.jpg"
import WeatherAppReactImage from "./images/weather-app-react-img.jpg"

export default function Project(){ return(
  <div className="projects" id="projects">
    <div className="container">
      <div className="row">
        
        <div className="col-1"></div>
        <div className="block col-10">
          <h1>Projects</h1>
          <div className="card-deck">
            <div className="card">
              <div className = "image-container"><a
                href="https://optimistic-babbage-91afd3.netlify.app/"
                target="_blank"
                rel="noreferrer"
                id="weather-app-link"
                ><img
                  src={WeatherAppImage}
                  className="card-img-top"
                  alt="weather-app"
                  id="weather-app-img"
              /></a></div>

              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text">
                  As part of SheCodes Plus course I created this weather app
                  from scratch.
                </p> 
                <div className="footer">
                View on <a href="...">Git</a>
              </div>
              </div>
             
            </div>
            <div className="card">
              <div className="image-container"><a
                href="https://amazing-kowalevski-4be0cd.netlify.app/"
                target="_blank"
                rel="noreferrer"
                id="weather-app--react-link">
                <img
                src={WeatherAppReactImage}
                className="card-img-top"
                alt="weather-app-react-img"
              /></a></div>
              
              <div className="card-body">
                <h5 className="card-title">React Weather App</h5>
                <p className="card-text">Weather app was created using React as part of the SheCodes React course</p>
              <div className="footer">
                View on <a href="https://github.com/flippity28/weather-app-react" target="_blank" rel="noreferrer">Git</a>
              </div></div>
              
            </div>
            <div className="card">
              <img
                src="./src/images/background pattern.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">Project 3 description</p>
              <div className="footer">
               View on <a href="...">Git</a>
              </div></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>)}