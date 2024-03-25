import { useEffect } from "react";
import LanguageHeading from "../../components/LanguageHeading";
import LanguageSelector from "../../components/Languages";

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
      <LanguageHeading />
      <LanguageSelector />
    </>
  );
}

export default LanguageLayout;
