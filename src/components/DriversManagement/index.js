import './driversmanagement.scss';

import { Button } from 'semantic-ui-react';
import Mediaquery from 'react-responsive';
import Patrick from 'src/assets/docs/patrick.png';
import info from 'src/assets/docs/info.svg';
import edit from 'src/assets/docs/edit.svg';
import trash from 'src/assets/docs/trash.svg';

import NavBar from '../NavBar';

const DriversManagement = () => (
  <div>
    <Mediaquery minWidth={601}>
      <NavBar />
      <div className="drivers-management">
        <h1 className="title">Gestion des chauffeurs</h1>

        <div className="trait" />

        <div className="button">
          <a href="http://localhost:8080/admin/create_driver">
            <Button>Ajouter un chauffeur</Button>
          </a>
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
    </Mediaquery>
    <Mediaquery maxWidth={600}>
      <NavBar />
      <div className="drivers-management">
        <h1 className="title-phone">Gestion des chauffeurs</h1>

        <div className="trait" />

        <div className="button-phone">
          <a href="http://localhost:8080/admin/create_driver">
            <Button>Ajouter un chauffeur</Button>
          </a>
        </div>

        <ul className="ul-phone">
          <li className="driver-list">
            <img src={Patrick} alt="" className="avatar" />
            <span>François</span>
            <span>BOUDIN</span>
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
            <div className="driver-utils">
              <img src={info} alt="" className="info" />
              <img src={edit} alt="" className="edit" />
              <img src={trash} alt="" className="trash" />
            </div>
          </li>
        </ul>
      </div>
    </Mediaquery>
  </div>
);

export default DriversManagement;
