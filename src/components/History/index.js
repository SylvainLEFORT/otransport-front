import './history.scss';
import NavBar from '../NavBar';

const History = () => (
  <div>
    <NavBar />
    <h1 className="title">Historique des livraisons</h1>
    <div className="trait" />
    <div className="deliveries-management">
      <ul>
        <li className="delivery">
          <div className="detail-1">
            <span>Nom du client</span>
            <span>Adresse du client</span>
            <span>Descriptif livraison : cargaison + volume</span>
          </div>
          <div className="detail-2">
            <span>Attribuée à : chauffeur 1</span>
            <span>Date de livraison</span>
          </div>
        </li>
        <li className="delivery">
          <div className="detail-1">
            <span>Nom du client</span>
            <span>Adresse du client</span>
            <span>Descriptif livraison : cargaison + volume</span>
          </div>
          <div className="detail-2">
            <span>Attribuée à : chauffeur 83</span>
            <span>Date de livraison</span>
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
            <span>Date de livraison</span>
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
            <span>Date de livraison</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default History;
