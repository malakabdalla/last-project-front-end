import React from 'react';
import { Link } from 'react-router-dom';
import { useConversations } from '../../context/Conversations';
import ConversationCard from '../Card';

export default function AllConversationsGrid() {
    const conversations = useConversations();

    const currentDate = new Date();

    const recentConversations = conversations.filter(conversation => {
        const conversationDate = new Date(conversation.timestamp);
        const diffTime = Math.abs(currentDate - conversationDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 7;
    });

    const olderConversations = conversations.filter(conversation => {
        const conversationDate = new Date(conversation.timestamp);
        const diffTime = Math.abs(currentDate - conversationDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 7 && diffDays <= 30;
    });

    return (
        <>
            <div>
                <h1>Conversations in the last 7 days:</h1>
                <div className='conversation'>
                    {recentConversations.map(conversation => (
                        <Link key={conversation.conversation_id} to={`/conversation/${conversation.conversation_id}`}>
                            <ConversationCard conversation={conversation} />
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <h1>Conversations in the last 30 days:</h1>
                <div className='conversation'>
                    {olderConversations.map(conversation => (
                        <Link key={conversation.conversation_id} to={`/conversation/${conversation.conversation_id}`}>
                            <ConversationCard conversation={conversation} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}