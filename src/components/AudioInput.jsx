/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function AudioInput({ sendAudioToServer }) {
    const [recording, setRecording] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [audioChunks, setAudioChunks] = useState([]);  // The currently recording audio
    const [mediaRecorder, setMediaRecorder] = useState(null);

    useEffect(() => {
        // Every time audioChunks changes, check if we should send the audio to the server
        if (!recording && audioChunks.length > 0) {
            (async () => {
                sendAudioToServer(audioChunks);
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
            mediaRecorder.stop();
            setMediaRecorder(null);
            console.log("Recording stopped");
            setRecording(false);
            setProcessing(false);
        }, 1000);
    }

    return (
        <div className="absolute bottom-20">
            <button
                className={`px-4 py-2 text-2xl font-semibold text-white transition-colors duration-200 rounded-lg shadow 
                    ${recording
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    } `}
                onClick={!recording ? startRecording : stopRecording}
            >
                {!recording ? "Speak" : "Send"} {processing ? "⏳" : ""}
            </button>
        </div>
    );
}
