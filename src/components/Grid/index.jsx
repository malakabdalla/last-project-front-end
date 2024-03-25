import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useConversations } from '../../context/Conversations';
import ConversationCard from '../Card'

export default function ConversationsGrid() {
    const conversations = useConversations();

    console.log(conversations)

    return (
        <>
            <div className='conversation'>
                {conversations.map(conversation => (
                    <Link key={conversation.conversation_id} to={`/user/conversation/${conversation.conversation_id}`}>
                        <ConversationCard conversation={conversation}/>
                    </Link>
                ))}
            </div>
        </>
    )
}