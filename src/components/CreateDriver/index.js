import { Button, Form } from 'semantic-ui-react';
import React from 'react';
import axios from 'axios';

import NavBar from '../NavBar';

import './createdriver.scss';

export default class CreateDriver extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
  };

  handleChange = (event) => {
    this.setState({
      firstname: event.target.value,
      lastname: event.target.value,
      email: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const driver = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,

    };

    axios.post('http://localhost:8000/api/drivers', { driver })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <h1 className="titre">Création d'un chauffeur</h1>
        <div className="form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Field className="input-1">
              <label>Prénom</label>
              <input placeholder="Veillez insérer le prénom" firstname="firstname" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Nom</label>
              <input placeholder="Veillez insérer le nom" lastname="lastname" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field className="input-1">
              <label>E-mail</label>
              <input placeholder="Veillez insérer l'e-mail" email="email" onChange={this.handleChange} />
            </Form.Field>
            {/* <Form.Field className="input-1">
              <label>Mot de passe</label>
              <input placeholder="Veillez insérer le mot de passe" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Numéro de téléphone</label>
              <input
              placeholder="Veillez insérer le numéro de téléphone"
              onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Image de profil</label>
              <input type="file" placeholder="Last Name" onChange={this.handleChange} />
            </Form.Field> */}
            <Button className="button" type="submit">Créer un chauffeur</Button>
          </Form>
        </div>
      </div>
    );
  }
}
