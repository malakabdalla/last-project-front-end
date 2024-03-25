import React, { useEffect, useHistory } from 'react';
import { Link } from 'react-router-dom';
import ConversationsGrid from "../../components/Grid";
import RecentConversationsGrid from '../../components/Grid/recent';
import NewChatBtn from '../../components/NewChatBtn';
import "./dashboard.css"

export default function DashboardPage() {

  return (
  <>
    <NewChatBtn />
    <Link id="link">New Conversations →</Link>
    <ConversationsGrid />
    <h1>Recently Viewed</h1>
    <RecentConversationsGrid />
  </>
  );
}


