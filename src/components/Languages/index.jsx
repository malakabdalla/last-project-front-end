import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LanguageSelector.css";
const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const startPractising = () => {
    console.log("Selected language: ", selectedLanguage);
    // Mocked for demo
    // Redirect to the conversation page
    navigate('/conversation/1');
  }

  return (
    <div className="language-selector max-w-2xl mx-auto">
      <div className="language-options">
        <label
          htmlFor="Arabic"
          className={selectedLanguage === "Arabic" ? "selected" : ""}
        >
          <input
            type="radio"
            id="Arabic"
            name="language"
            value="Arabic"
            onChange={() => handleLanguageSelect("Arabic")}
          />
          <img
            className="flag"
            src="./Arabic.png"
            alt="Saudi arabia"
          />
          <span>Arabic</span>
        </label>
        <label
          htmlFor="Gujarati"
          className={selectedLanguage === "Gujarati" ? "selected" : ""}
        >
          <input
            type="radio"
            id="Gujarati"
            name="language"
            value="Gujarati"
            onChange={() => handleLanguageSelect("Gujarati")}
          />
          <img
            className="flag"
            src="./Gujarati.png"
            alt="Gujarati"
          />
          <span>Gujarati</span>
        </label>
        <label
          htmlFor="Somali"
          className={selectedLanguage === "Somali" ? "selected" : ""}
        >
          <input
            type="radio"
            id="Somali"
            name="language"
            value="Somali"
            onChange={() => handleLanguageSelect("Somali")}
          />
          <img
            className="flag"
            src="./Somali.png"
            alt="Somali Flag"
          />
          <span>Somali</span>
        </label>
        <label
          htmlFor="Urdu"
          className={selectedLanguage === "Urdu" ? "selected" : ""}
        >
          <input
            type="radio"
            id="Urdu"
            name="language"
            value="Urdu"
            onChange={() => handleLanguageSelect("Urdu")}
          />
          <img
            className="flag"
            src="./Urdu.png"
            alt="Urdu Flag"
          />
          <span>Urdu</span>
        </label>
        <label
          htmlFor="Yorùbá"
          className={selectedLanguage === "Yorùbá" ? "selected" : ""}
        >
          <input
            type="radio"
            id="Yorùbá"
            name="language"
            value="Yorùbá"
            onChange={() => handleLanguageSelect("Yorùbá")}
          />
          <img
            className="flag"
            src="./Yorùbá.png"
            alt="Yorùbá Flag"
          />
          <span>Yorùbá</span>
        </label>
        <label
          htmlFor="Polish"
          className={selectedLanguage === "Polish" ? "selected" : ""}
        >
          <input
            type="radio"
            id="Polish"
            name="language"
            value="Polish"
            onChange={() => handleLanguageSelect("Polish")}
          />
          <img
            className="flag"
            src="./Polish.png"
            alt="Polish Flag"
          />
          <span>Polish</span>
        </label>
      </div>
      <div className="pt-16 flex justify-center">
        <button
          className="bg-rose-500 text-white font-bold py-2 px-4 rounded"
          onClick={startPractising}
        >
          Start practicing
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
