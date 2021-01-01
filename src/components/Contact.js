import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';


Contact.propTypes= {
  fullname: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
}

function Contact({fullname, avatar, online}) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={avatar}
        alt="avatar pic"
        key="1"
      />
      <div>
        <p className="name" key="2">{fullname}</p>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"} key="3"/>
          <p className="status-text" key="4">{online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
