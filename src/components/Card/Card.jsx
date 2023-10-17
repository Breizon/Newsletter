import React from "react";
import "./card.css";
import { AiFillCheckCircle } from "react-icons/ai";
import IMG from "../../assets/illustration-sign-up-desktop.svg";

const Card = ({ onSubmit }) => {
  return (
    <div className="container">
      {/* Section Content */}
      <section className="content">
        <h1 className="content_title">Stay updated!</h1>
        <h2 className="content_subtitle">
          Join 60,000+ product managers receiving monthly updates on:
        </h2>
        <ul className="content_list">
          <AiFillCheckCircle className="check" />
          <li className="item">Product discovery and building what matters</li>
          <AiFillCheckCircle className="check" />
          <li className="item">Measuring to ensure updates are a success</li>
          <AiFillCheckCircle className="check" />
          <li className="item">And much more!</li>
        </ul>
        {/* Form */}
        <form className="form" onSubmit={onSubmit}>
          <label className="form_label" htmlFor="form-input">
            Email address
          </label>
          <input
            className="form_input"
            type="email"
            id="form-input"
            placeholder="email@company.com"
            required
          />
          <input
            className="form_submit"
            type="submit"
            value="Subscribe to monthly newsletter"
          />
        </form>
      </section>
      {/* Section Illustartion  */}
      <section className="image">
        <img className="img" src={IMG} alt="sign-up illustration" />
      </section>
    </div>
  );
};

export default Card;
