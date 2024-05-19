import React, {useContext} from "react";
import { CountContext } from "../App";
import IonIcon from "@reacticons/ionicons";
import "../styles/popUp.css";

export default function PopUp({ title, image, description }) { 
    const { isOverlay, changeOverlay } = useContext(CountContext);

    return (
        <>
            <div className="black_overlay" style={{ display: `${isOverlay ? "block" : "none"}` }} onClick={changeOverlay}></div>
            <div className={`popup-container${isOverlay ? "-expanded" : ""}`}>
                <IonIcon style={{ cursor: "pointer" }} name="close-outline" onClick={changeOverlay} />
                <div className="popup-content">
                    <img src={image} alt="popup" className="popup-image" />
                    <h2 className="popup-title">{title}</h2>
                    <p className="popup-description">{description}</p>
                </div>
            </div>
        </>
    );
}