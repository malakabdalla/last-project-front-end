import PageWrapper from "./layouts/PageWrapper/index";
import PageWrapperAuth from "./layouts/PageWrapper/indexAuth";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import * as Pages from "./pages";
import { ThemeProvider } from "./context/ThemeContext";
import { ConversationProvider } from "./context/Conversations";

export default function App() {
  return (
    <ThemeProvider>
      <ConversationProvider>
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route index element={<Pages.LandingPage />} />
            <Route path="*" element={<Pages.NotFound />} />
          </Route>
          <Route path="/login" element={<Pages.LoginPage />} />
          <Route path="/register" element={<Pages.RegisterPage />} />
          <Route path="/auth" element={<PageWrapperAuth />}>
          <Route path="language" element={<Pages.LanguagePage />} />
          <Route path="dashboard" element={<Pages.DashboardPage />} />
          <Route path="conversation" element={<Pages.ConversationPage />} />
          </Route>
        </Routes>
      </ConversationProvider>
    </ThemeProvider>
  );
}
