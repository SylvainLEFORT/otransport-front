import './developpers.scss';
import { Card } from 'semantic-ui-react';
import francois from 'src/assets/docs/francois.jpg';
import celia from 'src/assets/docs/celia.png';
import sylvain from 'src/assets/docs/sylvain.jpeg';
import joffrey from 'src/assets/docs/joffrey.png';

const Developpers = () => (
  <div className="general">
    <h1 className="team-general-title">Notre équipe</h1>
    <div className="card">
      <div className="div">
        <div className="div-img"><img src={sylvain}/></div>
        <p className="team-name">Lefort Sylvain</p>
        <p className="team-title">Lead Front</p>
        <p className="team-description">Franchement ... je saurais pas dire</p>
      </div>
      <div className="div">
        <div className="div-img"><img src={celia}/></div>
        <p className="team-name">Tosic Célia</p>
        <p className="team-title">Lead Back</p>
        <p className="team-description">Le dev, c'est comme le chocolat, plus on en mange, plus on aime ça</p>
      </div>
      <div className="div">
        <div className="div-img"><img src={francois}/></div>
        <p className="team-name">Boudin François</p>
        <p className="team-title">Product Owner</p>
        <p className="team-description">Si le silence est d'or alors je le laisse a ceux qui ont en besoin !</p>
      </div>
      <div className="div">
        <div className="div-img"><img src={joffrey}/></div>
        <p className="team-name">Ludovici Joffrey</p>
        <p className="team-title">Git Master</p>
        <p className="team-description">Quand on veut être sûr de son coup, on plante des navets, on ne pratique pas le Code.</p>
      </div>
    </div>
  </div>
);

export default Developpers;
