import './login.scss';
import { Image, Form, Button } from 'semantic-ui-react';
import logo from 'src/assets/docs/O-transport.svg';

const Login = () => (
  <div className="login">
    <Image className="logo" src={logo} size="medium" />
    <div className="form">
      <Form>
        <Form.Field>
          <label>Nom d'utilisateur</label>
          <input placeholder="veillez ecrire votre nom" />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe</label>
          <input type="password" placeholder="veillez ecrire votre mot de passe" />
        </Form.Field>
        <Button type="submit">Se connecter</Button>
      </Form>
    </div>
  </div>
);

export default Login;
