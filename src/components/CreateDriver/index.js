import { Button, Form } from 'semantic-ui-react';
import React from 'react';
import axios from 'axios';

import NavBar from '../NavBar';

import './createdriver.scss';

export default class CreateDriver extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phone_number: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
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

    axios.post('http://localhost:8000/api/drivers', driver)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      phone_number,
    } = this.state;
    return (
      <div>
        <NavBar />
        <h1 className="titre">Création d'un chauffeur</h1>
        <div className="form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Field className="input-1">
              <label>Prénom</label>
              <input
                placeholder="Veuillez insérer le prénom"
                type="text"
                name="firstname"
                value={firstname}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Nom</label>
              <input
                placeholder="Veuillez insérer le nom"
                type="text"
                name="lastname"
                value={lastname}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>E-mail</label>
              <input
                placeholder="Veuillez insérer l'e-mail"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Mot de passe</label>
              <input
                placeholder="Veuillez insérer le mot de passe"
                type="text"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Numéro de téléphone</label>
              <input
                placeholder="Veuillez insérer le numéro de téléphone"
                type="text"
                name="phone_number"
                value={phone_number}
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
