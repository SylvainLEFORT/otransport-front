/* eslint-disable max-len */

// == Import style
import './navbar.scss';

// == Import dependencies
import Mediaquery from 'react-responsive';
import { NavLink } from 'react-router-dom';

//  == Component
const NavBar = () => (
  <div>
    <Mediaquery minWidth={601}>
      <div className="nav">
        <ul className="list">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/create_delivery">Créer une livraison</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/pending_deliveries">Livraisons en attente</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/shipping_deliveries">Livraisons en cours</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/history">Livraisons terminées</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/drivers_management">Gestion des chauffeurs</NavLink>
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
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')} to="/admin/shipping_deliveries">Livraisons en cours</NavLink>
          </li>
        </ul>
      </div>
    </Mediaquery>
  </div>
);

// == Export component
export default NavBar;
