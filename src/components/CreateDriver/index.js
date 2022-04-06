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
    password: '',
    phone_number: '',
  };

  handleChange = (event) => {
    this.setState({
      firstname: event.target.value,
      lastname: event.target.value,
      email: event.target.value,
      password: event.target.value,
      phone_number: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const driver = JSON.stringify({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.phone_number,

    });

    axios.post('http://localhost:8000/api/drivers', { driver }, { headers: { 'Content-Type': 'application/json' } })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    console.log(driver);
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
              <input placeholder="Veillez insérer le prénom" name="firstname" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Nom</label>
              <input placeholder="Veillez insérer le nom" name="lastname" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field className="input-1">
              <label>E-mail</label>
              <input placeholder="Veillez insérer l'e-mail" name="email" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Mot de passe</label>
              <input placeholder="Veillez insérer le mot de passe" name="password" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Numéro de téléphone</label>
              <input
                placeholder="Veillez insérer le numéro de téléphone"
                name="phone_number"
                onChange={this.handleChange}
              />
            </Form.Field>
            {/* <Form.Field>
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
