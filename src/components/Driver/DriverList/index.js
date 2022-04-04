import './driverlist.scss';
import { Button } from 'semantic-ui-react';

const DriverList = () => (
  <div className="driverList">
    <div className="infosClient">
      <p className="client">Nom du client</p>
      <p className="adresse">Adresse</p>
    </div>
    <div className="utilitaire">
      <p className="statut">Statut de la livraison</p>
      <Button className="button">Détails</Button>
    </div>
  </div>
);

export default DriverList;
