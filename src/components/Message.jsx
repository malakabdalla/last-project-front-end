/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function Message({ data }) {

    const { role, message, audio } = data;

    const bubbleColor = role === "assistant" ? "bg-blue-100" : "bg-green-100";
    const textColor = role === "assistant" ? "text-blue-800" : "text-green-800";

    useEffect(() => {
        // Take a look at the data when the component mounts (debugging purposes)
        console.log('data:', data);
    }), [];


    return (
        <div className={`w-full flex flex-col gap-2 ${role === 'user' ? 'items-end' : 'items-start'} p-2 ${textColor}`}>
            <span className="text-sm font-medium uppercase">
                {role === "assistant" ? "Teacher" : role === "user" ? "You" : ""}
            </span>

            <div className="flex flex-col gap-2 w-fit">
                <audio autoPlay={role === 'assistant'} controls src={audio}
                    className="max-w-full">
                    Your browser does not support the audio element.
                </audio>
                <span className={`text-sm ${role === 'user' ? 'self-end' : ''} text-gray-400`}>
                    {role === 'user' ? "Your speech" : "Teachers's response"}
                </span>
            </div>


            <div className={`mt-1 p-4 ${bubbleColor} rounded-lg shadow-sm`}>
                <p className="">{message}</p>
            </div>
        </div>
    );
}
