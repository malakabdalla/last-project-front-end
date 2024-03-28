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
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-rose-500">
          Recent conversations
        </h2>
        <NewChatBtn />
      </div>
      <ConversationsGrid />
      {/* <h1>Recently Viewed</h1>
      <RecentConversationsGrid /> */}
    </div>
  );
}
