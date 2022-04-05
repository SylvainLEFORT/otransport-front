import './createdeliveries.scss';
import { Button, Form } from 'semantic-ui-react';
import NavBar from '../NavBar';

const CreateDeliveries = () => (
  <div>
    <NavBar />
    <div className="createdeliveries">
      <h1>Création d'une livraison</h1>
      <Form className="form">
        <Form.Field>
          <label>Nom client</label>
          <input placeholder="Veillez renseigné le nom du client" />
        </Form.Field>
        <Form.Field>
          <label>Adresse</label>
          <input placeholder="Veillez renseigné l'adresse de livraison" />
        </Form.Field>
        <Form.Field>
          <label>Type de produit</label>
          <input placeholder="Veillez renseigné le type de produit à livré" />
        </Form.Field>
        <Form.Field>
          <label>Quantité</label>
          <input placeholder="Veillez renseigné la quantité à livré" />
        </Form.Field>
        <Button className="button" type="submit">Créer la livraison</Button>
      </Form>
    </div>
  </div>
);

export default CreateDeliveries;
