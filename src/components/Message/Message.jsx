import React from "react";
import "./message.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Message = ({ userEmail, onDismiss }) => {
  return (
    <div className="container_msg">
      <AiFillCheckCircle className="check_msg" />
      <h1 className="content_title">Thanks for subscribing!</h1>
      <h2 className="content_subtitle content_subtitle_msg">
        A confirmation email has been sent to{" "}
        <span className="email">{userEmail}</span> . Please open it and click
        the button inside to confirm your subscription.
      </h2>
      <input
        className="form_submit form_submit_msg"
        type="submit"
        value="Dismiss message"
        onClick={onDismiss}
      />
    </div>
  );
};

export default Message;
