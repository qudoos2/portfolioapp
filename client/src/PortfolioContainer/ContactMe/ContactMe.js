import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Scroolservice from "../../utilities/Scroolservice";
import Animations from "../../utilities/Anamations";
import "./ContactMe.css";
import emailjs from "emailjs-com";
import Typical from "react-typical";
export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    Scroolservice.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const myfun = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();

    let data = {
      name,
      email,
      message,
    };
    /*    try{
            
            setBool(true);
            const res = await axios.post(`./contact`, data);
            if(name.length ===0 || email.length ===0 || message.length ===0){
              setBanner(res.data.msg);
              toast.error(res.data.msg);
              setBool(false)
            } else if(res.status === 200){
              setBanner(res.data.msg);
              toast.success(res.data.msg);
              setBool(false)
            }
          }
          catch(error){
            console.log(error);
          }*/
    emailjs
      .sendForm(
        "service_9c5x7g1",
        "template_41tkzs9",
        e.target,
        "eGMhkY4zp2jbutpew"
      )
      .then((res) => {
        console.log("succes");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch", 1000]} />
          </h2>
          <a href="#">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={handleName}
              value={name}
              name="name"
              id="name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={handleEmail}
              value={email}
              name="user_email"
              id="email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              onChange={handleMessage}
              value={message}
              name="message"
              id="message"
            />

            <div className="send-btn">
              <button type="submit" onClick={myfun}>
                Send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not laoding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
