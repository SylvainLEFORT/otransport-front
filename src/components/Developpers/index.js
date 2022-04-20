// == Import style
import './developpers.scss';

// == Import required pictures
import francois from 'src/assets/docs/francois.jpg';
import celia from 'src/assets/docs/celia.png';
import sylvain from 'src/assets/docs/sylvain.jpeg';
import joffrey from 'src/assets/docs/joffrey.png';

//  == Component
const Developpers = () => (
  <div className="general">
    <h1 className="team-general-title">Notre équipe</h1>
    <div className="card">
      <div className="div">
        <div className="div-img"><img src={sylvain} alt="Sylvain" /></div>
        <p className="team-name">Lefort Sylvain</p>
        <p className="team-title">Lead Front</p>
        <p className="team-description">C’est votre attitude, bien plus que votre aptitude, qui détermine votre altitude.</p>
      </div>
      <div className="div">
        <div className="div-img"><img src={celia} alt="Célia" /></div>
        <p className="team-name">Tosic Célia</p>
        <p className="team-title">Lead Back</p>
        <p className="team-description">Le dev, c'est comme le chocolat, plus on en mange, plus on aime ça.</p>
      </div>
      <div className="div">
        <div className="div-img"><img src={francois} alt="Francois" /></div>
        <p className="team-name">Boudin François</p>
        <p className="team-title">Product Owner</p>
        <p className="team-description">Si le silence est d'or alors je le laisse a ceux qui en ont besoin !</p>
      </div>
      <div className="div">
        <div className="div-img"><img src={joffrey} alt="Joffrey" /></div>
        <p className="team-name">Ludovici Joffrey</p>
        <p className="team-title">Git Master</p>
        <p className="team-description">Quand on veut être sûr de son coup, on plante des navets, on ne pratique pas le Code.</p>
      </div>
    </div>
  </div>
);

// == Export component
export default Developpers;
