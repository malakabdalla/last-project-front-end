import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ConversationCard from '../Card'

export default function ConversationsGrid() {
    const [conversation, setConversation] = useState([])

    useEffect(()=>{
        async function fetchConversations(){
            // const response = await fetch('http://localhost:3000/conversations')
            // const data = await response.json()
            const data = [
                {
                  image: "https://example.com/image1.jpg",
                  id: "1",
                  name: "Conversation 1",
                  language: "English"
                },
                {
                  image: "https://example.com/image2.jpg",
                  id: "2",
                  name: "Conversation 2",
                  language: "Spanish"
                },
                {
                  image: "https://example.com/image3.jpg",
                  id: "3",
                  name: "Conversation 3",
                  language: "French"
                }
              ]
              
            setConversation(data)
        }
        fetchConversations()
    }, [])

    console.log(conversation)

    return (
        <>
            <div className='conversation'>
                {conversation.map(conversation => (
                    <Link key={conversation.id} to={`${conversation.id}`}>
                        <ConversationCard conversation={conversation}/>
                    </Link>
                ))}
            </div>
        </>
    )
}