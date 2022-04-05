import { Button, Form } from 'semantic-ui-react';
import NavBar from '../NavBar';
import './createdriver.scss';

const CreateDriver = () => (
  <div>
    <NavBar />
    <h1 className="titre">Création d'un chauffeur</h1>
    <div className="form">
      <Form>
        <Form.Field className="input-1">
          <label>Prénom</label>
          <input placeholder="Veillez inséré le prénom" />
        </Form.Field>
        <Form.Field className="input-1">
          <label>Nom</label>
          <input placeholder="Veillez inséré le nom" />
        </Form.Field>
        <Form.Field className="input-1">
          <label>E-mail</label>
          <input placeholder="Veillez inséré l'e-mail" />
        </Form.Field>
        <Form.Field className="input-1">
          <label>Mot de passe</label>
          <input placeholder="Veillez inséré le mot de passe" />
        </Form.Field>
        <Form.Field className="input-1">
          <label>Numéro de téléphone</label>
          <input placeholder="Veillez inséré le numéro de téléphone" />
        </Form.Field>
        <Form.Field>
          <label>Image de profil</label>
          <input type="file" placeholder="Last Name" />
        </Form.Field>
        <Button className="button" type="submit">Créer un chauffeur</Button>
      </Form>
    </div>
  </div>
);

export default CreateDriver;
