import React, { useState } from "react";
import MemberDetail from "./MemberDetail";
import MemberPreview from "./MemberPreview";

function MemberWrapper({ member }) {
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
            onMouseLeave={handleMouseLeave}
        >
            {isHovered
                ? (<MemberDetail member={member} />)
                : (<MemberPreview member={member} />)
            }

        </div>

    );
}

export default MemberWrapper;
