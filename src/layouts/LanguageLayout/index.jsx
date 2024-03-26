import { useEffect } from "react";
import LanguageHeading from "../../components/LanguageHeading";
import LanguageSelector from "../../components/Languages";
import "./languageLayout.css";

function LanguageLayout() {
  useEffect(() => {
    // Add class to body element when component mounts
    document.body.classList.add("page-loaded");

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("page-loaded");
    };
  }, []);
  return (
    <>
      <div className="languagePage min-h-screen bg-gradient-to-br from-pink-100 to-pink-300">
        <LanguageHeading />
        <LanguageSelector />
      </div>
    </>
  );
}

export default LanguageLayout;
