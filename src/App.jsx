import { useState, useEffect } from "react";
import { AudioInput, Message } from "./components";

// Mock data for the transcribed conversation between the user and the language model
const mockConversation = [
    {
        role: "system",
        message:
            "You are a helpful language tutor. Your job is to help the user learn Gujarati...",
    },
    {
        role: "assistant",
        message:
            "Hello, welcome to our shared learning space. What brings you here today?",
        audio: ''
    },
    {
        role: "user",
        message:
            "I want to learn Gujarati. I am a beginner and I want to learn the basics.",
    },
    {
        role: "assistant",
        message:
            "Great! I can help you with that. Let's start with the basics. Do you know how to say 'hello' in Gujarati?",
    },
];

export default function App() {

    const [conversation, setConversation] = useState([]);

    function addMessageToConversation(messageObject) {
        setConversation((prev) => [...prev, messageObject]);
    }

    function __TEMP__extractUserTranscribedText(userTranscription) {
        return userTranscription[0].alternatives[0].transcript;
    }

    const [audios, setAudios] = useState([]);

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

    // function addAudioToAudios(base64String) {
    //     const audioBlob = base64ToBlob(base64String, 'audio/mpeg');
    //     const audioURL = URL.createObjectURL(audioBlob);
    //     setAudios((prev) => [...prev, audioURL]);
    // }

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
                message: __TEMP__extractUserTranscribedText(data.userTranscription),
                audio: URL.createObjectURL(base64ToBlob(data.userAudio, 'audio/mpeg'))
            };

            const modelMessage = {
                role: "assistant",
                message: data.modelTranscription,
                audio: URL.createObjectURL(base64ToBlob(data.modelAudio, 'audio/mpeg'))
            };

            addMessageToConversation(userMessage);
            addMessageToConversation(modelMessage);

            // addAudioToAudios(data.modelAudio);
            // addAudioToAudios(data.userAudio);

        } catch (error) {
            console.error("Error sending audio to server:", error);
        }
    }

    return (
        <main className="mt-20 flex flex-col items-center gap-10">

            {audios.map((audio, index) => (
                <audio key={index} autoPlay controls src={audio}>
                    Your browser does not support the audio element.
                </audio>
            ))}

            {conversation
                .filter((item) => item.role !== "system") // Exclude 'system' messages
                .map((item, index) => (
                    <Message key={index} data={item} />
                ))}

            <AudioInput sendAudioToServer={sendAudioToServer} />
        </main>
    );
}
