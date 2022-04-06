import './currentdeliveries.scss';
import Mediaquery from 'react-responsive';
import NavBar from '../NavBar';

const CurrentDeliveries = () => (
  <div>
    <Mediaquery minWidth={601}>
      <NavBar />
      <div className="current-deliveries">
        <h1 className="title">Livraisons en cours</h1>
        <div className="trait" />
        <ul>
          <li className="current-delivery">
            <a>Chauffeur 1</a>
            <span>n° de livraison</span>
            <span>adresse de livraison</span>
            <a>Détail</a>
          </li>
          <li className="current-delivery">
            <a>Chauffeur 2</a>
            <span>n° de livraison</span>
            <span>adresse de livraison</span>
            <a>Détail</a>
          </li>
          <li className="current-delivery">
            <a>Chauffeur 3</a>
            <span>n° de livraison</span>
            <span>adresse de livraison</span>
            <a>Détail</a>
          </li>
          <li className="current-delivery">
            <a>Chauffeur 4</a>
            <span>n° de livraison</span>
            <span>adresse de livraison</span>
            <a>Détail</a>
          </li>
          <li className="current-delivery">
            <a>Chauffeur 5</a>
            <span>n° de livraison</span>
            <span>adresse de livraison</span>
            <a>Détail</a>
          </li>
        </ul>
      </div>
    </Mediaquery>
    <Mediaquery maxWidth={600}>
      <NavBar />
      <div className="current-deliveries">
        <h1 className="title">Livraisons en cours</h1>
        <div className="trait" />
        <ul>
          <li className="current-delivery">
            <a>Chauffeur 1</a>
            <span>n° de livraison</span>
            <span>adresse de livraison</span>
            <a>Détail</a>
          </li>
          <li className="current-delivery">
            <a>Chauffeur 2</a>
            <span>n° de livraison</span>
            <span>adresse de livraison</span>
            <a>Détail</a>
          </li>
          <li className="current-delivery">
            <a>Chauffeur 3</a>
            <span>n° de livraison</span>
            <span>adresse de livraison</span>
            <a>Détail</a>
          </li>
          <li className="current-delivery">
            <a>Chauffeur 4</a>
            <span>n° de livraison</span>
            <span>adresse de livraison</span>
            <a>Détail</a>
          </li>
          <li className="current-delivery">
            <a>Chauffeur 5</a>
            <span>n° de livraison</span>
            <span>adresse de livraison</span>
            <a>Détail</a>
          </li>
        </ul>
      </div>
    </Mediaquery>
  </div>
);

export default CurrentDeliveries;
