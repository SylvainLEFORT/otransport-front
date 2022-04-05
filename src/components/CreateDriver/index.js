import { Button, Form } from 'semantic-ui-react';
import NavBar from '../NavBar';
import './createdriver.scss';

const CreateDriver = () => (
  <div>
    <NavBar />
    <div className="form">

      <Form>
        <Form.Field>
          <label>Prénom</label>
          <input placeholder="Veillez inséré le prénom" />
        </Form.Field>
        <Form.Field>
          <label>Nom</label>
          <input placeholder="Veillez inséré le nom" />
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
          <input placeholder="Veillez inséré l'e-mail" />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe</label>
          <input placeholder="Veillez inséré le mot de passe" />
        </Form.Field>
        <Form.Field>
          <label>Numéro de téléphone</label>
          <input placeholder="Veillez inséré le numéro de téléphone" />
        </Form.Field>
        <Form.Field>
          <label>Image de profil</label>
          <input type="file" placeholder="Last Name" />
        </Form.Field>
        <Button type="submit">Créer un chauffeur</Button>
      </Form>
    </div>
  </div>
);

export default CreateDriver;
