import emailjs from "@emailjs/browser";
import "./EmailForm.scss";
import React, { useEffect, useState, useRef } from "react";
import EmailConfirmMessage from "./Message";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zq5le55",
        "template_46jmycb",
        form.current,
        "fZvVQsW2e6c8_M2fL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };

  return (
    <section className="contact-section">
      <ul>
        <li className="contactdetails">
          Phone: <br /> 0423043283
        </li>
        <li className="contactdetails">
          LinkedIn: <br />{" "}
          <a href="https://www.linkedin.com/in/davejohno/">
            linkedin.com/in/davejohno/
          </a>
        </li>
        <li className="contactdetails">
          Email: <br /> davejohno@hotmail.com
        </li>
        <li className="contactdetails"></li>
      </ul>
      <form className="email-Form" ref={form} onSubmit={sendEmail}>
        <h3>Email Me</h3>

        <input id="formName" type="text" name="user_name" placeholder="Name" />

        <input
          id="formEmail"
          type="email"
          name="user_email"
          placeholder="Email"
        />

        <textarea
          id="formTeaxtArea"
          name="message"
          placeholder="Enter Message Here"
        />
        <input type="submit" value="Send" />
        <EmailConfirmMessage />
      </form>
    </section>
  );
};
