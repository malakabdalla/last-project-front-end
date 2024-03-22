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
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "1",
                    name: "Conversation 1",
                    language: "English"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "2",
                    name: "Conversation 2",
                    language: "Spanish"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "3",
                    name: "Conversation 3",
                    language: "French"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "4",
                    name: "Conversation 4",
                    language: "German"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "5",
                    name: "Conversation 5",
                    language: "Italian"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "6",
                    name: "Conversation 6",
                    language: "Portuguese"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "7",
                    name: "Conversation 7",
                    language: "Chinese"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "8",
                    name: "Conversation 8",
                    language: "Japanese"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "9",
                    name: "Conversation 9",
                    language: "Korean"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "10",
                    name: "Conversation 10",
                    language: "Arabic"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "11",
                    name: "Conversation 11",
                    language: "Russian"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "12",
                    name: "Conversation 12",
                    language: "Hindi"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "13",
                    name: "Conversation 13",
                    language: "Bengali"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "14",
                    name: "Conversation 14",
                    language: "Punjabi"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "15",
                    name: "Conversation 15",
                    language: "Turkish"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "16",
                    name: "Conversation 16",
                    language: "Dutch"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "17",
                    name: "Conversation 17",
                    language: "Swedish"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "18",
                    name: "Conversation 18",
                    language: "Polish"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "19",
                    name: "Conversation 19",
                    language: "Greek"
                },
                {
                    image: "https://th.bing.com/th/id/OIP.Nad5BE0CntDSooa00dmyTAHaHa?rs=1&pid=ImgDetMain",
                    id: "20",
                    name: "Conversation 20",
                    language: "Finnish"
                }
            ];
                          
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