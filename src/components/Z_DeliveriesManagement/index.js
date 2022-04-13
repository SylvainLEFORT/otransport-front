import './deliveriesmanagement.scss';

import { Link } from 'react-router-dom';

import add from 'src/assets/docs/plus.svg';
import edit from 'src/assets/docs/edit.svg';
import trash from 'src/assets/docs/trash.svg';

import NavBar from '../NavBar';

const DeliveriesManagement = () => (
  <div>
    <NavBar />
    <div className="deliveries-management">
      <h1 className="title">Gestion des livraisons</h1>

      <div className="trait" />

      <div className="plus">
        <Link to="/admin/create_delivery"><img src={add} alt="" className="add" /></Link>
      </div>

      <ul>
        <li className="delivery">
          <div className="detail-1">
            <span>Nom du client</span>
            <span>Adresse du client</span>
            <span>Descriptif livraison : cargaison + volume</span>
          </div>
          <div className="detail-2">
            <span>Attribuée à : chauffeur 1</span>
            <span>Date de création</span>
          </div>
          <div className="utils">
            <img src={edit} alt="" />
            <img src={trash} alt="" />
          </div>
        </li>
        <li className="delivery">
          <div className="detail-1">
            <span>Nom du client</span>
            <span>Adresse du client</span>
            <span>Descriptif livraison : cargaison + volume</span>
          </div>
          <div className="detail-2">
            <span>Attribuée à : chauffeur 2</span>
            <span>Date de création</span>
          </div>
          <div className="utils">
            <img src={edit} alt="" />
            <img src={trash} alt="" />
          </div>
        </li>
        <li className="delivery">
          <div className="detail-1">
            <span>Nom du client</span>
            <span>Adresse du client</span>
            <span>Descriptif livraison : cargaison + volume</span>
          </div>
          <div className="detail-2">
            <span>Attribuée à : chauffeur 3</span>
            <span>Date de création</span>
          </div>
          <div className="utils">
            <img src={edit} alt="" />
            <img src={trash} alt="" />
          </div>
        </li>
        <li className="delivery">
          <div className="detail-1">
            <span>Nom du client</span>
            <span>Adresse du client</span>
            <span>Descriptif livraison : cargaison + volume</span>
          </div>
          <div className="detail-2">
            <span>Attribuée à : chauffeur 4</span>
            <span>Date de création</span>
          </div>
          <div className="utils">
            <img src={edit} alt="" />
            <img src={trash} alt="" />
          </div>
        </li>
        <li className="delivery">
          <div className="detail-1">
            <span>Nom du client</span>
            <span>Adresse du client</span>
            <span>Descriptif livraison : cargaison + volume</span>
          </div>
          <div className="detail-2">
            <span>Attribuée à : chauffeur 5</span>
            <span>Date de création</span>
          </div>
          <div className="utils">
            <img src={edit} alt="" />
            <img src={trash} alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default DeliveriesManagement;
