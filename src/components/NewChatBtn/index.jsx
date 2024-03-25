import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./newChatBtn.css";
import ModalBtns from "./modalBtns";

export default function NewChatBtn() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleOptionSelect = async (language) => {
        setShowModal(false);
        
        const conversationTitle = prompt("Please enter a conversation title:");

        const data = {
            id: sessionStorage.getItem('userid'),
            title: conversationTitle,
            language: language
        };

        try {
            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    account_id: data.id,
                    conversation_summary: data.title,
                    language: data.language
                })
            };
            const response = await fetch('http://localhost:5015/conversations', option);

            if (response.ok) {
                const { conversation_id } = await response.json();
                navigate(`/user/conversation/${conversation_id}`);
            } else {
                console.error('Failed to create conversation:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating conversation:', error);
        }
    };

    return (
        <>
            <p id="newChat">New Chat</p>
            <button id="newChatBtn" onClick={() => setShowModal(true)}><div id="plusSign">+</div></button>
            {showModal && (
                <ModalBtns onClose={() => setShowModal(false)} onSelectOption={handleOptionSelect} />
            )}
        </>
    );
}