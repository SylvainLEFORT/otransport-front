import './navbar.scss';

import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="nav">
    <ul className="list">
      <li>
        Gestion des chauffeurs
      </li>
      <li>
        Gestion des livraisons
      </li>
      <li>
        <NavLink className={(active) => (active ? 'current' : '')} to="/admin">Livraisons en cours</NavLink>
      </li>
      <li>
        Créer une livraison
      </li>
      <li>
        Historique
      </li>
    </ul>
  </div>
);

export default NavBar;
