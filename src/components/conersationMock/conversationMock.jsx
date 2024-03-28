import { useState } from "react";

function Mock() {
  const [toggle, setToggle] = useState(false);

  const toggleMockData = () => {
    setToggle(!toggle);
  };

  function mockdata() {
    const mockMessage = {
      role: "assistant",
      messages: {
        gpt_response_english: "What would you like to learn about?",
      },
      audio: "/audio/convo1.mp3",
    };
    addMessageToConversation(mockMessage);
  }
  function mockdata2() {
    const mockMessage = {
      role: "assistant",
      messages: {
        gpt_response_english:
          "Absolutely, here are some common words related to food in Gujarati: 1. Food: ખોરાક (Khōrāka) 2. Bread: રોટલી (Rōṭlī) 3. Rice: ચોખા (Chokhā) 4. Milk: દૂધ (Dūdha)",
      },
      audio: "/audio/convo2.mp3",
    };
    addMessageToConversation(mockMessage);
  }
  function mockuserdata1() {
    const mockMessage = {
      role: "User",
      messages: {
        user_message_english:
          "I'd like to learn more about the language please",
      },
      audio: "/audio/convo3.mp3",
    };
    addMessageToConversation(mockMessage);
  }
  function mockuserdata2() {
    const mockMessage = {
      role: "User",
      messages: {
        user_message_english:
          "Can we learn about words related to food please?",
      },
      audio: "/audio/convo4.mp3",
    };
    addMessageToConversation(mockMessage);
  }

  return (
    <div>
      <button onClick={toggleMockData}>Toggle Mock Data</button>
    </div>
  );
}

export default Mock;
