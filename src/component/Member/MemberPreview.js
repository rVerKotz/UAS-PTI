import React from "react";
import "./MemberPreview.css";
import { Link } from "react-router-dom";

function MemberPreview({ member }) {

    return (
        <div className="member-preview" key={member.name} 
        style={{
            backgroundImage:`url(${member.img})`, 
            backgroundSize:"cover",
            backgroundPosition:"center"
            }}>
            {/* <img src={member.img} alt={member.name} /> */}
            <div className="member-card-container" style={{paddingTop:"auto"}}>
                <h2>{member.name}</h2>
                <p className="member-title">{member.title}</p>
            </div>
        </div>
    );
}

export default MemberPreview;
