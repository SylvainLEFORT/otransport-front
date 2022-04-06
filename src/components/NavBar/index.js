import './navbar.scss';
import Mediaquery from 'react-responsive';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="nav">
    <ul className="list">
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} exact to="/admin/drivers_management">Gestion des chauffeurs</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} exact to="/admin/deliveries_management">Gestion des livraisons</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} exact to="/admin/current_deliveries">Livraisons en cours</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} exact to="/admin/create_delivery">Créer une livraison</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} exact to="/admin/history">Historique</NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;
