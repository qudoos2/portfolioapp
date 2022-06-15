import React, { Component } from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-googl-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Abdul Qudoos</span>
            </span>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Enthustic Dev",
                      1000,
                      "Full Stack  Dev",
                      1000,
                      "Reactjs Dev",
                      1000,
                      "Javascript Dev",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Knock of building application with front and backend
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn"> Hire Me </button>
              <a href="ehizcv.pdf" download="Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
