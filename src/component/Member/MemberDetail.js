import React from "react";
import "../../styles/MemberPreview.css";
import { Link } from "react-router-dom";

function MemberDetail({ member, index}) {

  return (
    <div className="member-card" key={index}>
    <div className="member-card-container">
        <h2>{member.name}</h2>
        <p className="member-title">{member.title}</p>
        <p>{member.description}</p>
        <p>{member.email}</p>
        <Link to="/contact">
            <button className="member-button">Contact</button>
        </Link>
    </div>
</div>
  );
}

export default MemberDetail;
