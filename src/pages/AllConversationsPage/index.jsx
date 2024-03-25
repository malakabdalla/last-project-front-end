import React, { useEffect, useHistory } from 'react';
import { Link } from 'react-router-dom';
import ConversationsGrid from "../../components/Grid";
import RecentConversationsGrid from '../../components/Grid/recent';
import NewChatBtn from '../../components/NewChatBtn';
import "./allconversations.css"

export default function AllConversationsPage() {

  return (
  <>
    <Link id="link" to="/allconversations">New Conversations →</Link>
    <ConversationsGrid />
    <h1>Recently Viewed</h1>
    <RecentConversationsGrid />
    <div>
      <NewChatBtn />
    </div>
  </>
  );
}