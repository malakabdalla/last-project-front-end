import React, { useState, useContext, createContext, useEffect } from "react";

const ConversationsContext = createContext();

export const ConversationsProvider = ({ children }) => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetchConversations = async () => {
            const id = sessionStorage.getItem('userid');
            const response = await fetch(`http://localhost:5015/conversations/user/${id}`);
            const data = await response.json();
            setConversations(data);
        };

        fetchConversations();
    }, []);

    return (
        <ConversationsContext.Provider value={conversations}>
            {children}
        </ConversationsContext.Provider>
    );
};

export const useConversations = () => useContext(ConversationsContext);
