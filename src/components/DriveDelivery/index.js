import { Button } from 'semantic-ui-react';
import './driverdelivery.scss';

const DriverDelivery = () => (
  <div className="driver-delivery">
    <h1>Détail de la livraison</h1>
    <div className="details">
      <h2>Nom client</h2>
      <p>Brico-Dépotte</p>
      <h2>Adresse</h2>
      <p>Rue de la vieille, Montpellier 34000 </p>
      <h2>Type de marchandise</h2>
      <p>Boites de cassoulets</p>
      <h2>Quantité</h2>
      <p>50 000 boites</p>
      <a href="http://localhost:8080/driver">
        <Button className="button">Retour</Button>
      </a>
    </div>
  </div>
);

export default DriverDelivery;
