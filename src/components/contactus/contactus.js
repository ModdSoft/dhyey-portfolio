import React, { useState } from "react";
import "./contactus.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import logo from "./back-img.png";
import { personalData } from "../../data/personal-data";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the message using formData
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div id="contactus" className="contactusContainer">
      <div className="c-header-container">
        <div className="c-header-container2">
          <span className="c-header-subtext"></span>
          <span className="c-header-text">LET'S CONNECT</span>
          <span className="c-header-subtext"></span>
        </div>
      </div>
      <div className="c-main-container">
        <div className="left-container">
          <div className="say-hi-header">
            <span className="header-texts">Connect With Me!</span>
          </div>
          <div className="left-top-container">
            <div className="contact-info">
              <div className="info-item">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item"
                >
                  <IoLogoGithub className="c-logo-style" size={50} />
                  <span className="logo-texts">Github</span>
                </a>
              </div>
              <div className="info-item">
                <a
                  href={personalData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item"
                >
                  <BiLogoLinkedin className="c-logo-style" size={50} />
                  <span className="logo-texts">LinkedIn</span>
                </a>
              </div>
              <div className="info-item">
                <a
                  href={`tel:${personalData.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item"
                >
                  <IoMdCall className="c-logo-style" size={50} />
                  <span className="logo-texts">+91 8320658316</span>
                </a>
              </div>
              <div className="info-item">
                <a
                  href={personalData.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item"
                >
                  <MdAlternateEmail className="c-logo-style" size={50} />
                  <span className="logo-texts">dhyeymodi21@gmail.com</span>
                </a>
              </div>
              <div className="info-item">
                <CiLocationOn className="c-logo-style" size={50} />
                <span className="logo-texts">
                  9,shilpakunj society
                  <br />
                  Warasia Ring Road,Harni
                  <br />
                  Vadodara 390022, Gujarat, India
                </span>
              </div>
            </div>
            <div className="image-container">
              <img src={logo} className="img-logo" alt="Logo" />
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="say-hi-header">
            <span className="header-texts">Say Hi!</span>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name*"
              className="input-style"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="input-style"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Message*"
              className="input-style"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="input-button-style">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
