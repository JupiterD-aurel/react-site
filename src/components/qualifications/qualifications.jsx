import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">Mes qualifications</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>Html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>Css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>Javascript</h1>
        </div>
        <div className="qualification">
          <div className="content php"></div>
          <h1>Php</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>React</h1>
        </div>
        <div className="qualification">
          <div className="content office"></div>
          <h1>Office</h1>
        </div>
        <div className="qualification">
          <div className="content nodejs"></div>
          <h1>Node.js</h1>
        </div>
        <div className="qualification">
          <div className="content python"></div>
          <h1>Python</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
