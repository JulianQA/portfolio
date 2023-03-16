import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./_formsContact.scss";

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [textAreaHeight, setTextAreaHeight] = useState("200px");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    e.target.value === ""
      ? setTextAreaHeight("200px")
      : setTextAreaHeight(`${e.target.scrollHeight}px`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send("service_3yu6724", "template_f8gqepv", data, "oNW-3yS1XvEjMbzxK")
      .then((respone) => {
        console.log("Message succesfully sended", respone.status, respone.text);
        alert("Message succesfully sended");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        alert("error, try again later");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="FormContact">
      <div className="FormContact__data">
        <label htmlFor="name" className="data__label">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name || ""}
          onChange={handleNameChange}
          className="data__input"
        />
      </div>
      <div className="FormContact__data">
        <label htmlFor="email" className="data__label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email || ""}
          onChange={handleEmailChange}
          className="data__input"
        />
      </div>
      <div className="FormContact__data">
        <label htmlFor="message" className="data__label">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          value={message || ""}
          onChange={handleMessageChange}
          className="data__input data__text-area"
          style={{ minHeight: "200px", height: textAreaHeight }}
        ></textarea>
      </div>
      <button className="FormContact__button">Send</button>
    </form>
  );
};
export { FormContact };
