import './adminhomepage.scss';

import NavBar from '../NavBar';

const AdminHomepage = () => (
  <div>
    <NavBar />
    <div className="admin-home">
      <h1 className="title">Livraisons en cours</h1>
      <div className="trait" />
      <ul>
        <li className="delivery">
          <a>Chauffeur 1</a>
          <span>n° de livraison</span>
          <span>adresse de livraison</span>
          <a>Détail</a>
        </li>
        <li className="delivery">
          <a>Chauffeur 1</a>
          <span>n° de livraison</span>
          <span>adresse de livraison</span>
          <a>Détail</a>
        </li>
        <li className="delivery">
          <a>Chauffeur 1</a>
          <span>n° de livraison</span>
          <span>adresse de livraison</span>
          <a>Détail</a>
        </li>
        <li className="delivery">
          <a>Chauffeur 1</a>
          <span>n° de livraison</span>
          <span>adresse de livraison</span>
          <a>Détail</a>
        </li>
        <li className="delivery">
          <a>Chauffeur 1</a>
          <span>n° de livraison</span>
          <span>adresse de livraison</span>
          <a>Détail</a>
        </li>
      </ul>
    </div>
  </div>
);

export default AdminHomepage;
