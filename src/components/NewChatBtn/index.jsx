import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./newChatBtn.css";
import ModalBtns from "./modalBtns";

export default function NewChatBtn() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [isPlusClicked, setIsPlusClicked] = useState(false);

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
                    conversation_title: data.title,
                    language: data.language
                })
            };
            const response = await fetch('http://localhost:3000/conversations', option);

            if (response.ok) {
                const { conversation_id } = await response.json();
                navigate(`/conversation/${conversation_id}`);
            } else {
                console.error('Failed to create conversation:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating conversation:', error);
        }
    };

    const toggleSign = () => {
        setIsPlusClicked(!isPlusClicked);
    };

    const openModal = () => {
        setShowModal(true);
        toggleSign();
    };

    const closeModal = () => {
        setShowModal(false);
        toggleSign();
    };

    return (
        <>

            <span
                className="flex cursor-pointer justify-center pr-2 bg-blue-500 hover:bg-blue-700 w-20  text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate('/language')}
            >
                New
                <svg id="icon-keyboard_arrow_left" viewBox="0 0 24 24" className="w-6 fill-white">
                    <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
                </svg></span>
        </>
    );

    // return (
    //     <>
    //         {/* <p id="newChat">New Chat</p>
    //         <button id="newChatBtn" onClick={openModal}>
    //             <div id="plusSign">
    //                 {isPlusClicked ? '×' : '+'}
    //             </div>
    //         </button>
    //         {showModal && (
    //             <ModalBtns onClose={closeModal} onSelectOption={handleOptionSelect} />
    //         )} */}
    //     </>
    // );
}