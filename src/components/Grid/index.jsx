import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useConversations } from '../../context/Conversations';
import ConversationCard from '../Card'

export default function ConversationsGrid() {
    const conversations = useConversations();

    console.log(conversations)

    return (
        <>
            <div className="flex gap-20 flex-wrap justify-between mt-20">
                {conversations.slice(0,8).map((conversation, index) => (
                    <Link key={conversation.conversation_id} to={`/conversation/${conversation.conversation_id}`}>
                        <ConversationCard conversation={conversation} index={index}/>
                    </Link>
                ))}
            </div>
        </>
    )
}