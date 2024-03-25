import React from 'react';
import { Link } from 'react-router-dom';
import AllConversationsGrid from "../../components/AllConversations";
import NewChatBtn from '../../components/NewChatBtn';
import "./allconversations.css"

export default function AllConversationsPage() {

  return (
    <div id="convo">
    <Link></Link>
    <NewChatBtn />
    <AllConversationsGrid />
    </div>
  );
}