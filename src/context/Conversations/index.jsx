import React, { useState, useContext, createContext } from "react";

const ConversationContext = createContext();
export const ConversationProvider = ({ children }) => {
  const [conversationData, setConversationData] = useState([]);
  return (
    <ConversationContext.Provider value={{ conversationData, setConversationData }}>
      {children}
    </ConversationContext.Provider>
  );
};
export const useConversation = () => useContext(ConversationContext);