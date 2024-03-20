/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function Message({ data }) {
  const bubbleColor = data.role === "assistant" ? "bg-blue-100" : "bg-green-100";
  const textColor = data.role === "assistant" ? "text-blue-800" : "text-green-800";

  useEffect(() => {
    console.log('data:', data);
  }), [];


  return (
    <div className={`p-2 ${textColor}`}>
      <span className="text-xs font-medium uppercase">
        {data.role === "assistant" ? "Teacher" : data.role === "user" ? "Learner" : ""}
      </span>

      <audio autoPlay controls src={data.audio}>
        Your browser does not support the audio element.
      </audio>


      <div className={`mt-1 p-4 ${bubbleColor} rounded-lg shadow-sm`}>
        <p className="">{data.message}</p>
      </div>
    </div>
  );
}
