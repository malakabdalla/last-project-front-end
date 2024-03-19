import { useState, useEffect } from "react";
import { AudioInput, Message } from "./components";

export default function App() {
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

  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [transcriptions, setTranscriptions] = useState([]);
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    if (audioChunks.length > 0 && !recording) {
      (async () => {
        console.log("audioChunks.length:", audioChunks.length);
        sendAudioToServer();
        // Clear the audioChunks after sending the data to the server
        setAudioChunks([]);
      })();
    }
  }, [audioChunks]);

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => {
        setAudioChunks((currentChunks) => [...currentChunks, event.data]);
      };
      recorder.start();
      setMediaRecorder(recorder);

      console.log("Recording started");
      setRecording(true);
    } catch (error) {
      console.error("Error accessing audio device:", error);
    }
  }

  function stopRecording() {
    setProcessing(true);
    // Wait 1 second for the MediaRecorder to finish recording
    setTimeout(() => {
      // Now stop the recorder
      mediaRecorder.stop();
      setMediaRecorder(null);
      console.log("Recording stopped");
      setRecording(false);
      setProcessing(false);
    }, 1000);
  }

  //   async function sendAudioToServer() {
  //     const audioBlob = new Blob(audioChunks, { type: "audio/flac" });
  //     const formData = new FormData();
  //     formData.append("audio", audioBlob);

  //     try {
  //       console.log("Sending audio to server...");
  //       const response = await fetch("http://localhost:3000/receive", {
  //         method: "POST",
  //         body: formData,
  //       });
  //       console.log("Server response:", await response);
  //       console.log("Server response.json():", await response.json());
  //       // const data = await response.json();
  //       // console.log(data);
  //       // setTranscriptions((prev) => [...prev, ...data.transcriptions]);
  //     } catch (error) {
  //       console.error("Error sending audio to server:", error);
  //     }
  //   }

  function addAudioToAudios(blob) {
    const audioURL = URL.createObjectURL(blob);
    setAudios((prev) => [...prev, audioURL]);
  }

  async function sendAudioToServer() {
    const audioBlob = new Blob(audioChunks, { type: "audio/flac" });
    const formData = new FormData();
    formData.append("audio", audioBlob);

    try {
      console.log("Sending audio to server...");
      const response = await fetch("http://localhost:3000/receive", {
        method: "POST",
        body: formData,
      });
      //   console.log("Server response:", response);
      const data = await response.json();

      console.log("data:", data);
      //   console.log("Server response.json():", await response.json());

      //   addAudioToAudios(data.userAudio);
      addAudioToAudios(data.modelAudio);

      // const data = await response.json();
      // console.log(data);
      // setTranscriptions((prev) => [...prev, ...data.transcriptions]);
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

      {mockConversation
        .filter((item) => item.role !== "system") // Exclude 'system' messages
        .map((item, index) => (
          <Message key={index} role={item.role} message={item.message} />
        ))}
      <AudioInput
        recording={recording}
        startRecording={startRecording}
        stopRecording={stopRecording}
        processing={processing}
      />
    </main>
  );
}
