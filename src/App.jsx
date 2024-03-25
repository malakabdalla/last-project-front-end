import PageWrapper from "./layouts/PageWrapper/index";
import PageWrapperAuth from "./layouts/PageWrapper/indexAuth";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import * as Pages from "./pages";
import { ThemeProvider } from "./context/ThemeContext";
import { ConversationsProvider } from "./context/Conversations";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ConversationsProvider>
          <Routes>
            <Route path="/" element={<PageWrapper />}>
              <Route index element={<Pages.LandingPage />} />
              <Route path="*" element={<Pages.NotFound />} />
            </Route>
            <Route path="/login" element={<Pages.LoginPage />} />
            <Route path="/register" element={<Pages.RegisterPage />} />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <PageWrapperAuth />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Pages.DashboardPage />} />
              <Route path="language" element={<Pages.LanguagePage />} />
              <Route
                path="allconversations/:id"
                element={<Pages.AllConversationsPage />}
              />
              <Route
                path="conversation/:id"
                element={<Pages.ConversationPage />}
              />
            </Route>
          </Routes>
        </ConversationsProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
