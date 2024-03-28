import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useConversations } from '../../context/Conversations';
import ConversationCard from '../Card'

export default function RecentConversationsGrid() {
    const conversations = useConversations();
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(()=>{
        const storedRecentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
        setRecentlyViewed(storedRecentlyViewed);
    }, [])

    const recentlyViewedMap = recentlyViewed.reduce((map, entry) => {
        map[entry.id] = entry.timestamp;
        return map;
    }, {});

    const idsArray = Object.keys(recentlyViewedMap);
    
    const numericIdsArray = idsArray.map(id => parseInt(id, 10));

    const filteredData = conversations.filter(conversation => {
        return numericIdsArray.includes(conversation.conversation_id);
    });


    const sortedFilteredData = filteredData.slice().sort((a, b) => {
        const timestampA = recentlyViewedMap[a.conversation_id];
        const timestampB = recentlyViewedMap[b.conversation_id];
        return timestampB - timestampA;
    });

    console.log(sortedFilteredData)
    
    return (
        <>
            <div className='conversation'>
                {sortedFilteredData.slice(0,5).map(conversation => (
                    <Link key={conversation.conversation_id} to={`/conversation/${conversation.conversation_id}`}>
                        <ConversationCard conversation={conversation}/>
                    </Link>
                ))}
            </div>
        </>
    );
}
