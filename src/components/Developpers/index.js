import './developpers.scss';
import { Card } from 'semantic-ui-react';
import francois from 'src/assets/docs/francois.jpg';
import celia from 'src/assets/docs/celia.png';
import sylvain from 'src/assets/docs/sylvain.jpeg';
import joffrey from 'src/assets/docs/joffrey.png';

const Developpers = () => (
  <div className="general">
    <h1>Notre équipe</h1>
    <div className="card">
      <div className="div">
        <img src={francois}/>
      </div>
      <div className="div">
        <img src={sylvain}/>
      </div>
      <div className="div">
        <img src={joffrey}/>
      </div>
      <div className="div">
        <img src={celia}/>
      </div>
    </div>
  </div>
);

export default Developpers;
