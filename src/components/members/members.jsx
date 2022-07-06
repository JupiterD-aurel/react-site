import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Qui suis-je?</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Dhan-aurel</h1>
          <h3 className="position">Developpeur web & mobile</h3>
          <h4 className="about">
  Avec un parcours plutôt atypique de l'économie à technicien en maintenance informatique et avec une passion pour les nouvelles technologies, mon voyage m'a conduit à la “Normandie Web School”. Je suis une formation de “Chef de projet digital” option “Développement web”. Dynamique et motivé, je possède un sens aigu du travail en équipe. J’aime le contact direct avec les clients et sais m’adapter aux exigences professionnelles. Je serais ravi de mettre mon expérience diversifiée dans l’univers de l’informatique à votre disposition pour une alternancee en développement web.
          </h4>
<div className="button-contact">
          <a href="http://localhost:3001" className="contact-member">
            <span>Mon portfolio</span>
          </a>
</div>
        </div>
      </div>
    </div>

  );
};

export default Members;
