import PageWrapper from "./layouts/PageWrapper/index";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import * as Pages from "./pages";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Pages.LandingPage />} />
        </Route>
        <Route path="/login" element={<Pages.LoginPage />} />
        <Route path="/register" element={<Pages.RegisterPage />} />
        <Route path="/language" element={<Pages.LanguagePage />} />
        <Route path="/dashboard" element={<Pages.DashboardPage />} />
        <Route path="/conversation" element={<Pages.ConversationPage />} />

        <Route path="*" element={<Pages.NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}
