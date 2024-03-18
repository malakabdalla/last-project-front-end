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
        <div className="absolute bottom-20">
            <button
                className={`px-4 py-2 text-2xl font-semibold text-white transition-colors duration-200 rounded-lg shadow 
                    ${recording ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} `}
                onClick={!recording ? startRecording : stopRecording}
            >{!recording ? 'Speak' : 'Send'}</button>
        </div>
    )
}