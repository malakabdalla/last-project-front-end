import { useEffect, useHistory } from "react";
import { Link } from "react-router-dom";
import ConversationsGrid from "../../components/Grid";
import RecentConversationsGrid from "../../components/Grid/recent";
import NewChatBtn from "../../components/NewChatBtn";
import "./dashboard.css";

export default function DashboardPage() {
  const id = sessionStorage.getItem("userid");

  return (
    <div id="dashboard">
      <NewChatBtn />
      <div>
        <Link id="link" to={`/user/allconversations/${id}`}>
          New Conversations →
        </Link>
      </div>
      <ConversationsGrid />
      <h1>Recently Viewed</h1>
      <RecentConversationsGrid />
    </div>
  );
}
