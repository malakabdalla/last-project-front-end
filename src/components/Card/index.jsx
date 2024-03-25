import React from 'react'
import './card.css'

export default function ConversationCard({ conversation }) {

    const conversationsImage = "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain"

    return (
        <div className="conversation-card">
            <h2>{conversation.language}</h2>
            <div> 
                <img src={conversationsImage} alt={conversation.conversation_id} />
            </div>
        </div>
    )
}
