import './driverinfos.scss';
import { Button } from 'semantic-ui-react';

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
      <a href="http://localhost:8080/admin/drivers_management">
        <Button className="button">Retour</Button>
      </a>
    </div>
  </div>
);

export default DriverInfos;
