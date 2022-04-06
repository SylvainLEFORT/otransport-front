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
      <a href="http://localhost:8080/driver/delivery/1">
        <Button className="button" type="submit">Détails</Button>
      </a>
    </div>
  </div>
);

export default DriverList;
