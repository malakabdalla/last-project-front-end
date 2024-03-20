import { useState, useEffect } from "react";
import { AudioInput, Message } from "./components";

export default function App() {

    const [conversation, setConversation] = useState([]);

    function addMessageToConversation(messageObject) {
        setConversation((prev) => [...prev, messageObject]);
    }

    useEffect(() => {
        console.log(import.meta.env.VITE_BACKEND_URL);
        // Make a generic request to the backend to wake up the server
        (async () => {
            try {
                const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/');
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
        const audioBlob = new Blob(audioChunks, { type: "audio/flac" });  // Could change this, but it works so far 
        const formData = new FormData();
        formData.append("audio", audioBlob);

        try {
            console.log("Sending audio to server...");
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/receive', {
                method: "POST",
                body: formData,
            });
            const data = await response.json();

            console.log("data:", data);

            // Add the returned data to the conversation array 
            const userMessage = {
                role: "user",
                message: data.userTranscription,
                audio: URL.createObjectURL(base64ToBlob(data.userAudio, 'audio/mpeg'))
            };

            const modelMessage = {
                role: "assistant",
                message: data.modelTranscription,
                audio: URL.createObjectURL(base64ToBlob(data.modelAudio, 'audio/mpeg'))
            };

            addMessageToConversation(userMessage);
            addMessageToConversation(modelMessage);

        } catch (error) {
            console.error("Error sending audio to server:", error);
        }
    }

    return (
        <main className="m-10 flex flex-col items-center gap-10">

            {conversation
                .filter((item) => item.role !== "system") // Exclude 'system' messages
                .map((item, index) => (
                    <Message key={index} data={item} />
                ))}

            <AudioInput sendAudioToServer={sendAudioToServer} />
        </main>
    );
}
