import React from 'react'

export default function ConversationCard({ conversation }) {

    return (
        <div className="conversation-card">
            <h2>{conversation.language}</h2>
            <div> 
                <img src={conversation.image} alt={conversation.id} />
            </div>
        </div>
    )
}
