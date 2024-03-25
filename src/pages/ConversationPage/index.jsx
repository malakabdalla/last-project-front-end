import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { AudioInput, Message } from "../../components";

function ConversationPage() {
  const [conversation, setConversation] = useState([]);
  const { id } = useParams();
  const conversationEndRef = useRef(null);

  function addMessageToConversation(messageObject) {
    setConversation(prev => [...prev, messageObject]);
  }

  useEffect(() => {
    // Scroll to the bottom of the conversation whenever it changes
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: 'smooth' });
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
  }, []);

  useEffect(() => {
    // Store the conversation ID and timestamp in local storage
    const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const updatedRecentlyViewed = [{ id, timestamp: Date.now() }, ...recentlyViewed.filter(entry => entry.id !== id)].slice(0, 5);
    localStorage.setItem('recentlyViewed', JSON.stringify(updatedRecentlyViewed));
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
          gpt_response_english: data.modelTranscription.gpt_response_english ? data.modelTranscription.gpt_response_english : "N/A",
          gpt_response: data.modelTranscription.gpt_response,
          gpt_response_breakdown: data.modelTranscription.gpt_response_breakdown ? data.modelTranscription.gpt_response_breakdown : "N/A",
          suggestions: data.modelTranscription.suggestions ? data.modelTranscription.suggestions : "N/A",
        },
        audio: URL.createObjectURL(base64ToBlob(data.modelAudio, "audio/mpeg")),
      };

      addMessageToConversation(userMessage);
      addMessageToConversation(modelMessage);
    } catch (error) {
      console.error("Error sending audio to server:", error);
    }
  }

  return (
    <main className="m-10 flex flex-col items-center gap-10">
      <h1>Mother Tongue</h1>
      <h2>Instructions</h2>
      <p>
        Welcome to Mother Tongue! A tool to help you learn and practice your Gujarati. Start by saying hello and have fun!
      </p>

      {conversation
        .filter((item) => item.role !== "system")
        .map((item, index) => (
          <Message key={index} data={item} />
        ))}
      
      <div ref={conversationEndRef} />

      <AudioInput sendAudioToServer={sendAudioToServer} />
    </main>
  );
}

export default ConversationPage;
