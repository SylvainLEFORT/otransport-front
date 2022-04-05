import { Button, Checkbox, Form } from 'semantic-ui-react';
import NavBar from '../NavBar';
import './createdriver.scss';

const CreateDriver = () => (
  <div>
    <NavBar />
    <div className="form">
      <h1>Création d'un chauffeur</h1>
      <Form>
        <Form.Field>
          <label>Prénom</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Nom</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label>Numéro de téléphone</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label>Image de profil</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Button type="submit">Créer un chauffeur</Button>
      </Form>
    </div>
  </div>
);

export default CreateDriver;
