import './navbar.scss';

import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="nav">
    <ul className="list">
      <li>
        Gestion des chauffeurs
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} exact to="/admin/deliveries_management">Gestion des livraisons</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} exact to="/admin">Livraisons en cours</NavLink>
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
