import './driverlist.scss';
import { Button } from 'semantic-ui-react';
import Mediaquery from 'react-responsive';

const DriverList = () => (
  <div className="gobal">
    <Mediaquery minWidth={601}>
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
    </Mediaquery>
    <Mediaquery maxWidth={600}>
      <div className="driverList-phone">
        <div className="infosClient-phone">
          <p className="client">Nom du client</p>
        </div>
        <div className="utilitaire-phone">
          <a href="http://localhost:8080/driver/delivery/1">
            <Button className="button" type="submit">Détails</Button>
          </a>
        </div>
      </div>
    </Mediaquery>
  </div>
);

export default DriverList;
