import React, { useState } from "react";
import MemberDetail from "./MemberDetail";
import MemberPreview from "./MemberPreview";

function MemberWrapper({ member, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onClick={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered
                ? (<MemberDetail member={member} index={index}/>)
                : (<MemberPreview member={member} index={index}/>)
            }

        </div>

    );
}

export default MemberWrapper;
