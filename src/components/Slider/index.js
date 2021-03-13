import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide" 
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="img/slide_1.jpg" alt="First slide" style={{height:450+'px'}}/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/slide_2.jpg" alt="Second slide" style={{height:450+'px'}} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/slide_3.jpg" alt="Third slide" style={{height:450+'px'}} />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
