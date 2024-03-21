/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function Message({ data }) {

    const { role, messages, audio } = data;

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

            {/* Needs to be conditionall rendered: if role === 'user' then messages.user_message_english -- else if role === 'assistant' then messages.gpt_response_english  */}
                <p className="">{role === 'user' ? messages.user_message_english : messages.gpt_response_english}</p>
                {/* <p className="">{message}</p> */}

                {/* If role === 'assistant', then render these items: 
                    messages.gpt_response
                    messages.gpt_response_breakdown
                    messages.suggestions
                 */}
                {role === 'assistant' && (
                    <ul className="mt-2 flex flex-col gap-2">
                        <li className="text-sm text-gray-800 list-disc ml-6"><span className="italic text-gray-600">Gujarati: </span> {messages.gpt_response}</li>
                        <li className="text-sm text-gray-800 list-disc ml-6"><span className="italic text-gray-600">Breakdown:  </span>{messages.gpt_response_breakdown}</li>
                        <li className="text-sm text-gray-800 list-disc ml-6"><span className="italic text-gray-600">Suggestions: </span> {messages.suggestions}</li>
                    </ul>
                )}

            </div>
        </div>
    );
}
