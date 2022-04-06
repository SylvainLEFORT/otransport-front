import './driverinfos.scss';

import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DriverInfos = () => (
  <div>
    <h1>Détail du chauffeur</h1>
    <div className="details">
      <h2>Nom chauffeur</h2>
      <p>Boudin François</p>
      <h2>E-mail</h2>
      <p>François@drive.fr</p>
      <h2>Numéro de téléphone</h2>
      <p>06/40/84/78/65</p>
      <h2>Status</h2>
      <p>En cours de livraisons</p>
      <Link to="/admin/drivers_management">
        <Button className="button">Retour</Button>
      </Link>
    </div>
  </div>
);

export default DriverInfos;
