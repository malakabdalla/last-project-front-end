import React from "react";
import "./newChatBtn.css";

export default function ModalBtns({ onClose, onSelectOption }) {

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="optionBtn" onClick={() => onSelectOption("Gujurati")}>gu</button>
                <button className="optionBtn" onClick={() => onSelectOption("Arabic")}>ar</button>
                <button className="optionBtn" onClick={() => onSelectOption("Urdu")}>ur</button>
                <button className="optionBtn" onClick={() => onSelectOption("Somali")}>so</button>
            </div>
        </div>
    );
}