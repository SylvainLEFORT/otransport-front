import './navbar.scss';
import Mediaquery from 'react-responsive';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div>
    <Mediaquery minWidth={601}>
      <div className="nav">
        <ul className="list">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/drivers_management">Gestion des chauffeurs</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/deliveries_management">Gestion des livraisons</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/current_deliveries">Livraisons inachevés</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/create_delivery">Créer une livraison</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/history">Historique</NavLink>
          </li>
        </ul>
      </div>
    </Mediaquery>
    <Mediaquery maxWidth={600}>
      <div className="nav">
        <ul className="list">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/drivers_management">Gestion des chauffeurs</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/deliveries_management">Gestion des livraisons</NavLink>
          </li>
        </ul>
      </div>
    </Mediaquery>
  </div>
);

export default NavBar;
