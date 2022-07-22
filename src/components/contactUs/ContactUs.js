import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import { MdCall, MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaFacebook, FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillGoogleCircle } from "react-icons/ai";
import axios from "axios";

function ContactUs() {
  const [contactUs, setContactUs] = useState({
    fullname: "",
    email: "",
    city: "",
    message: "",
  });
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setContactUs({ ...contactUs, [name]: value });
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    setformErrors(validate(contactUs));
    const contactForm = {
      fullname: contactUs.fullname,
      email: contactUs.email,
      city: contactUs.city,
      message: contactUs.message,
    };
    axios
      .post("http://localhost:5000/contactUs", contactForm)
      .then((data) => {
        setIsSubmit(true);
      })
      .catch((error) => {});

    setContactUs({
      fullname: "",
      email: "",
      city: "",
      message: "",
    });
    setTimeout(() => {
      setIsSubmit(false);
    }, 3000);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Name is required!";
    } else if (values.fullname.length < 3) {
      errors.fullname = "Name must be more than 2 characters!";
    } else if (values.fullname.length > 20) {
      errors.fullname = "Name cannot exceed more than 20 characters!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.city) {
      errors.city = "Subject is required!";
    } else if (values.city.length < 5) {
      errors.city = "Subject must be more than 5 characters!";
    } else if (values.city.length > 20) {
      errors.city = "Subject cannot exceed more than 20 characters!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    } else if (values.message.length < 5) {
      errors.message = "Message must be more than 30 characters!";
    } else if (values.message.length > 300) {
      errors.message = "Message cannot exceed more than 300 characters!";
    }
    return errors;
  };
  return (
    <>
      <div id="contactUs">
        <div className="line"></div>
        <h1>Contact Us</h1>
        <p>Any question or remarks? Just write us message!</p>
        <div className="contactBox">
          <div className="contactDetails">
            <div>
              <h1 className="mb-1">Get a quote</h1>
              <p>
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
            </div>
            <div className="directContact">
              <a href="tel: +923123456789">
                <MdCall className="icon" />
                <div className="ms-2">+923123456789</div>
              </a>
              <a href="mailto: filmyindustry145@gmail.com">
                <MdEmail className="icon" />
                <div className="ms-2">filmyindustry145@gmail.com</div>
              </a>
              <a href="https://goo.gl/maps/CF2hJvHX1gkbwSpR8" target="_blank">
                <FaMapMarkerAlt className="icon" />
                <div className="ms-2">Lahore, Pakistan</div>
              </a>
            </div>
            <div className="socialIcons">
              <a href="#">
                <FaFacebook className="s-icon" />
              </a>
              <a href="#">
                <RiInstagramFill className="s-icon" />
              </a>
              <a href="#">
                <FaPinterest className="s-icon" />
              </a>
              <a href="#">
                <AiFillGoogleCircle className="s-icon" />
              </a>
            </div>
          </div>
          <div className="form">
            <div className="inputField d-flex flex-column">
              <label htmlFor="full_name">Full Name:</label>
              <input
                type="text"
                id="full_name"
                placeholder="Full name"
                name="fullname"
                value={contactUs.fullname}
                onChange={handleInputs}
              />
            </div>
            <div className="inputField d-flex flex-column mt-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                value={contactUs.email}
                onChange={handleInputs}
              />
            </div>
            <div className="inputField d-flex flex-column mt-2">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                placeholder="City"
                name="city"
                value={contactUs.city}
                onChange={handleInputs}
              />
            </div>
            <div className="inputField d-flex flex-column mt-2">
              <label htmlFor="message">Message:</label>
              <textarea
                rows=""
                cols=""
                id="message"
                placeholder="Message..."
                name="message"
                value={contactUs.message}
                onChange={handleInputs}
              ></textarea>
            </div>
            <div className="contactBtn mt-3">
              <button onClick={handleSubmitBtn}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
