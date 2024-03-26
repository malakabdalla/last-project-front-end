/* eslint-disable react/no-unescaped-entities */
import { NavLink, useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { AudioInput, Message } from "../../components";

function ConversationPage() {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const { id } = useParams();
  const conversationEndRef = useRef(null);

  /* --- Hacky code for demo purposes ¯\_(ツ)_/¯  -- */
  const mockPreviousConvo = true;

  function addMockPreviousConvoData() {
    let mockMessage = {
      role: "user",
      messages: {
        user_message_english:
          "I'd like to learn more about the language please",
      },
      audio: "/audio/convo3.mp3",
    };
    addMessageToConversation(mockMessage);
    mockMessage = {
      role: "assistant",
      messages: {
        gpt_response_english: "What would you like to learn about?",
      },
      audio: "/audio/convo1.mp3",
    };
    addMessageToConversation(mockMessage);
    mockMessage = {
      role: "user",
      messages: {
        user_message_english:
          "Can we learn about words related to food please?",
      },
      audio: "/audio/convo4.mp3",
    };

    addMessageToConversation(mockMessage);
    mockMessage = {
      role: "assistant",
      messages: {
        gpt_response_english:
          "Absolutely, here are some common words related to food in Gujarati: 1. Food: ખોરાક (Khōrāka) 2. Bread: રોટલી (Rōṭlī) 3. Rice: ચોખા (Chokhā) 4. Milk: દૂધ (Dūdha)",
      },
      audio: "/audio/convo2.mp3",
    };
    addMessageToConversation(mockMessage);
  }
  /* -----  */

  function addMessageToConversation(messageObject) {
    setConversation((prev) => [...prev, messageObject]);
  }

  function mockInitialGreeting() {
    const mockGreetingMessage = {
      role: "assistant",
      messages: {
        gpt_response_english:
          "Welcome to Mother Tongue! Would you like to practise a life-like conversation, or learn more about the Gujarati language?",
      },
      // The audio file is in `Public/audio/mockk_static_audio.mp3`
      audio: "/audio/mock_static_audio.mp3",
    };
    addMessageToConversation(mockGreetingMessage);
  }

  useEffect(() => {
    // Scroll to the bottom of the conversation whenever it changes
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  useEffect(() => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    // Make a generic request to the backend to wake up the server
    (async () => {
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/");
        if (response.status === 200) console.log("Server is available!");
      } catch (error) {
        console.error("Error checking server availability:", error);
      }
    })();
    mockInitialGreeting();

    if (mockPreviousConvo) addMockPreviousConvoData();
  }, []);

  useEffect(() => {
    // Store the conversation ID and timestamp in local storage
    const recentlyViewed =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    const updatedRecentlyViewed = [
      { id, timestamp: Date.now() },
      ...recentlyViewed.filter((entry) => entry.id !== id),
    ].slice(0, 5);
    localStorage.setItem(
      "recentlyViewed",
      JSON.stringify(updatedRecentlyViewed)
    );
  }, [id]);

  function base64ToBlob(base64, type) {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], { type });
  }

  async function sendAudioToServer(audioChunks) {
    setIsLoading(true); // Set loading state to true
    // Prepare the audio data to send to the server
    const audioBlob = new Blob(audioChunks, { type: "audio/flac" }); // Could change this, but it works so far
    const formData = new FormData();
    formData.append("audio", audioBlob);

    try {
      console.log("Sending audio to server...");
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/receive",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      console.log("data:", data);

      // Add the returned data to the conversation array
      const userMessage = {
        role: "user",
        messages: {
          user_message_english: data.modelTranscription.user_message_english,
        },
        audio: URL.createObjectURL(base64ToBlob(data.userAudio, "audio/mpeg")),
      };

      const modelMessage = {
        role: "assistant",
        messages: {
          gpt_response_english: data.modelTranscription.gpt_response_english
            ? data.modelTranscription.gpt_response_english
            : data.modelTranscription.gpt_response,
          gpt_response: data.modelTranscription.gpt_response_english
            ? data.modelTranscription.gpt_response
            : data.modelTranscription.gpt_response_english,
          gpt_response_breakdown: data.modelTranscription.gpt_response_breakdown
            ? data.modelTranscription.gpt_response_breakdown
            : "",
          suggestions: data.modelTranscription.suggestions
            ? data.modelTranscription.suggestions
            : "",
        },
        audio: URL.createObjectURL(base64ToBlob(data.modelAudio, "audio/mpeg")),
      };

      addMessageToConversation(userMessage);
      addMessageToConversation(modelMessage);
    } catch (error) {
      console.error("Error sending audio to server:", error);
    } finally {
      setIsLoading(false); // Set loading state to false when done
    }
  }

  return (
    <main className="mx-10 mt-6 mb-8 flex flex-col items-center gap-10 mx-auto">
      <nav className="w-full flex justify-start">
        <NavLink to="/dashboard">
          <span className="flex pl-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <svg
              id="icon-keyboard_arrow_left"
              viewBox="0 0 24 24"
              className="w-6 fill-white"
            >
              <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
            </svg>
            Dashboard
          </span>
        </NavLink>
      </nav>
      {/* CSS Animation */}
      <style>
        {`
          @keyframes growShrink {
            0%, 100% {
              transform: scale(1);
              filter: hue-rotate(0deg);
              
            }
            50% {
              transform: scale(1.1);
              filter: hue-rotate(360deg);

            }
          }
        `}
      </style>
      <div className={`w-40 ${isLoading ? "animate-pulse" : ""}`}>
        <img
          src="/colourful-circle.png"
          alt="Colourful blob"
          className="w-full"
          style={{
            animation: isLoading
              ? "growShrink 2s ease-in-out infinite"
              : "none",
            transition: "transform 0.5s ease-out",
          }}
        />
      </div>
      {conversation
        .filter((item) => item.role !== "system")
        .map((item, index) => (
          <Message
            key={index}
            data={item}
            mockPreviousConvo={mockPreviousConvo}
          />
        ))}
      <div ref={conversationEndRef} />
      {isLoading && <p>Loading...</p>} {/* Display loading indicator */}
      <AudioInput sendAudioToServer={sendAudioToServer} />
    </main>
  );
}

export default ConversationPage;
