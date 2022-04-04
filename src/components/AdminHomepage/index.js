import './adminhomepage.scss';

import NavBar from '../NavBar';

const AdminHomepage = () => (
  <div>
    <NavBar />
    <div className="admin-home">
      <h1 className="title">Livraisons en cours</h1>
      <div className="trait" />
      <ul>
        <li className="delivery 1">
          <a>Chauffeur 1</a>
          <span>n° de livraison</span>
          <span>adresse de livraison</span>
          <a>Détail</a>
        </li>
        <li className="delivery 2">
          <a>Chauffeur 1</a>
          <span>n° de livraison</span>
          <span>adresse de livraison</span>
          <a>Détail</a>
        </li>
        <li className="delivery 3">
          <a>Chauffeur 1</a>
          <span>n° de livraison</span>
          <span>adresse de livraison</span>
          <a>Détail</a>
        </li>
        <li className="delivery 4">
          <a>Chauffeur 1</a>
          <span>n° de livraison</span>
          <span>adresse de livraison</span>
          <a>Détail</a>
        </li>
        <li className="delivery 5">
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
