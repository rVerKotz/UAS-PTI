import React from "react";
import "../../styles/MemberPreview.css";

function MemberPreview({ member, index }) {

    return (
        <div className="member-preview" key={index} 
        style={{
            backgroundImage:`url(${member.img})`, 
            backgroundSize:"cover",
            backgroundPosition:"center"
            }}>
            <div className="member-card-container" style={{paddingTop:"auto"}}>
                <h2>{member.name}</h2>
                <p className="member-title">{member.title}</p>
            </div>
        </div>
    );
}

export default MemberPreview;
