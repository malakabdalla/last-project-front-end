import "./midSection.css";
function MidSection() {
  return (
    <div className="midSection">
      <div>
        <img className="landingImg2" src="../../../public/landing1.png" />
      </div>
      <div className="text">
        <h2 className="second-title">
          Experience language learning like never before with our unique voice
          interaction feature.
        </h2>
        <div>
          <p className="small-para">
            Mother Tongue revolutionizes language learning by allowing you to
            interact with our service using your voice. No more boring textbooks
            or repetitive exercises!
          </p>
          <ul className="unordered-list">
            <li>
              Immerse yourself in authentic conversations and improve
              pronunciation.
            </li>
            <li>
              Practice speaking naturally with our advanced speech recognition
              technology.
            </li>
            <li>
              Unlock your language potential with personalized feedback and
              progress tracking.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
