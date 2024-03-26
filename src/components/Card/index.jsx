import React from 'react'
import './card.css'

export default function ConversationCard({ conversation, index }) {

    // const conversationsImage = "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain"
    // Image location is: `Public/colourful-circle.png`
    const conversationsImage = "Public/colourful-circle.png";


    return (
        <div className="conversation-card">
            <h2 className="text-xl font-medium text-rose-500 mb-4">{conversation.language}</h2>
            <div className="w-40">
                <img class="w-full" src={conversationsImage} alt={conversation.conversation_id} className={`image-number-${index}`} />
            </div>
        </div>
    )
}
