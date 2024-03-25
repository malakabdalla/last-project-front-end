import "./Hero.css";
function HeroSection() {
  return (
    <div className="heroSection">
      <div>
        <h1 className="title">Introducing Mother Tongue.</h1>
        <p className="para">
          Welcome to Mother Tongue, the interactive voice-activated language
          learning platform that helps you master your native language.
        </p>
      </div>
      <div>
        <img
          className="landingImg"
          src="../../../public/MotherTonguehero.png"
        />
      </div>
    </div>
  );
}

export default HeroSection;
