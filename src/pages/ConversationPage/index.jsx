/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { AudioInput, Message } from "../../components";

function ConversationPage() {
  const [conversation, setConversation] = useState([]);

  function addMessageToConversation(messageObject) {
    setConversation((prev) => [...prev, messageObject]);
  }

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
          gpt_response_english: data.modelTranscription.gpt_response_english,
          gpt_response: data.modelTranscription.gpt_response,
          gpt_response_breakdown:
            data.modelTranscription.gpt_response_breakdown,
          suggestions: data.modelTranscription.suggestions,
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
        Imagine you are speaking to your Gujarati grandmother. Start by saying
        "kemcho", which means "How are you?". If you need help with how to say
        something, simply ask a question in English. Have fun!
      </p>

      {conversation
        .filter((item) => item.role !== "system") // Exclude 'system' messages
        .map((item, index) => (
          <Message key={index} data={item} />
        ))}

      <AudioInput sendAudioToServer={sendAudioToServer} />
    </main>
  );
}

export default ConversationPage;
