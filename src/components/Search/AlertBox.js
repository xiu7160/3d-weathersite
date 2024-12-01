import React from "react";

const AlertBox = ({ message, onClose, blink }) => (
    <div className={`alert-box ${blink ? "blink01" : ""}`}>
        <p>{message}</p>
        <button className="close-btn" onClick={onClose}> X </button>
    </div>
);

export default AlertBox;