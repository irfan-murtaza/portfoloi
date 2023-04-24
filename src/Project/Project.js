import React from "react";

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

import CallAction from "./CallAction";


function Project() {
  return (
    <div className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
      </div>
      <div className="project">
        <div className="justify-content-center flex-column flex-sm-row flex-xs-row flex-md-row card overflow-hidden shadow rounded-4 border-0 mx-5 mb-5">
          <div className="text-center text">
            <h2 className="fw-bolder">Unvo App</h2>
            <p>An ecommerce android / ios application built using react native. Stripe Payment is integrated. Main functionalities including customer can purchase products, search products based upon the category of product, name of the the product, user can like the product etc.</p>
          </div>
          <div>
            <img 
              className="img-fluid" 
              src={project1} 
              alt="..." 
            />
          </div>
        </div>
      </div>

      <div className="project">
        <div className="justify-content-center flex-column flex-sm-row flex-xs-row flex-md-row card overflow-hidden shadow rounded-4 border-0 mx-5 mb-5">
          <div className="text-center text">
            <h2 className="fw-bolder">Travlive</h2>
            <p>A traveling website built using React JS and Node js and with Firebase as a Database. Main features include that users can search about the destinations and our application will show them the deatination details and the associated agencies which are going to that destination</p>
          </div>
          <div>
            <img 
              className="img-fluid " 
              src={project2} 
              alt="..." 
            />
          </div>
        </div>
      </div>

      <div className="project">
        <div className="justify-content-center flex-column flex-sm-row flex-xs-row flex-md-row card overflow-hidden shadow rounded-4 border-0 mx-5 mb-5">
          <div className="text-center text">
            <h2 className="fw-bolder">Music App</h2>
            <p>An android application built by using React native framework. In this app user can listen the songs watch adds and earn the amount. User can earn money through the app by doing other actions like charge their phone and unlock phone etc.</p>
          </div>
          <div>
            <img 
              className="img-fluid " 
              src={project3} 
              alt="..." 
            />
          </div>
        </div>
      </div>

      <CallAction></CallAction>
    </div> 
  );
}

export default Project;