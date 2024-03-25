import React from 'react';
import AllConversationsGrid from "../../components/Grid";
import NewChatBtn from '../../components/NewChatBtn';
import "./allconversations.css"

export default function AllConversationsPage() {

  return (
    <>
    <NewChatBtn />
    <AllConversationsGrid />
  </>
  );
}