import './adminhomepage.scss';

import NavBar from '../NavBar';

const AdminHomepage = () => (
  <div>
    <NavBar />
    <div className="admin-home">
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
  </div>
);

export default AdminHomepage;
