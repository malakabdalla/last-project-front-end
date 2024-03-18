import { useState } from 'react';

export default function AudioInput() {

    const [recording, setRecording] = useState(false);

    function startRecording() {
        console.log('Recording started');
        setRecording(true);
    }

    function stopRecording() {
        console.log('Recording stopped');
        setRecording(false);
    }

    return (
        <div className="audio-input">
            <button onClick={!recording ? startRecording : stopRecording}>{!recording ? 'Speak' : 'Send'}</button>
        </div>
    )
}