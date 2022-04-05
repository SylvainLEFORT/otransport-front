import './driversmanagement.scss';

import { Button } from 'semantic-ui-react';

import Patrick from 'src/assets/docs/patrick.png';
import info from 'src/assets/docs/info.svg';
import edit from 'src/assets/docs/edit.svg';
import trash from 'src/assets/docs/trash.svg';

import NavBar from '../NavBar';

const DriversManagement = () => (
  <div>
    <NavBar />
    <div className="drivers-management">
      <h1 className="title">Gestion des chauffeurs</h1>

      <div className="trait" />

      <div className="button">
        <Button>Ajouter un chauffeur</Button>
      </div>

      <ul>
        <li className="driver-list">
          <img src={Patrick} alt="" className="avatar" />
          <span>François</span>
          <span>BOUDIN</span>
          <span>En livraison</span>
          <div className="driver-utils">
            <img src={info} alt="" className="info" />
            <img src={edit} alt="" className="edit" />
            <img src={trash} alt="" className="trash" />
          </div>
        </li>
        <li className="driver-list">
          <img src={Patrick} alt="" className="avatar" />
          <span>Sylvain</span>
          <span>LEFORT</span>
          <span>En livraison</span>
          <div className="driver-utils">
            <img src={info} alt="" className="info" />
            <img src={edit} alt="" className="edit" />
            <img src={trash} alt="" className="trash" />
          </div>
        </li>
        <li className="driver-list">
          <img src={Patrick} alt="" className="avatar" />
          <span>Patrick</span>
          <span>TATHOR</span>
          <span>En livraison</span>
          <div className="driver-utils">
            <img src={info} alt="" className="info" />
            <img src={edit} alt="" className="edit" />
            <img src={trash} alt="" className="trash" />
          </div>
        </li>
        <li className="driver-list">
          <img src={Patrick} alt="" className="avatar" />
          <span>François</span>
          <span>BOUDIN</span>
          <span>En livraison</span>
          <div className="driver-utils">
            <img src={info} alt="" className="info" />
            <img src={edit} alt="" className="edit" />
            <img src={trash} alt="" className="trash" />
          </div>
        </li>
        <li className="driver-list">
          <img src={Patrick} alt="" className="avatar" />
          <span>François</span>
          <span>BOUDIN</span>
          <span>En livraison</span>
          <div className="driver-utils">
            <img src={info} alt="" className="info" />
            <img src={edit} alt="" className="edit" />
            <img src={trash} alt="" className="trash" />
          </div>
        </li>
      </ul>

    </div>

  </div>
);

export default DriversManagement;
