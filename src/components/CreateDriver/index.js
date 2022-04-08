import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from '../NavBar';

import './createdriver.scss';

const CreateDriver = () => {
  const [drivers, setDriver] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/drivers')
      .then((res) => {
        const resultDrive = res.data;
        setDriver(resultDrive);
      });
  }, []);

  const handleChange = (e) => {
    setDriver({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const driver = JSON.stringify({
      firstname: drivers.firstname,
      lastname: drivers.lastname,
      email: drivers.email,
      password: drivers.password,
      phone_number: drivers.phone_number,

    });

    axios.post('http://localhost:8000/api/drivers', driver)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />

      <div className="create-driver">

        <h1 className="titre">Création d'un chauffeur</h1>

        <div className="trait" />

        <Link to="/admin/drivers_management" className="return">
          <Button>Retour</Button>
        </Link>

        <div className="form">
          <Form onSubmit={handleSubmit}>
            <Form.Field className="input-1">
              <label>Prénom</label>
              <input
                placeholder="Veuillez insérer le prénom"
                type="text"
                name="firstname"
                value={drivers.firstname}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Nom</label>
              <input
                placeholder="Veuillez insérer le nom"
                type="text"
                name="lastname"
                value={drivers.lastname}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>E-mail</label>
              <input
                placeholder="Veuillez insérer l'e-mail"
                type="email"
                name="email"
                value={drivers.email}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Mot de passe</label>
              <input
                placeholder="Veuillez insérer le mot de passe"
                type="text"
                name="password"
                value={drivers.password}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Numéro de téléphone</label>
              <input
                placeholder="Veuillez insérer le numéro de téléphone"
                type="text"
                name="phone_number"
                value={drivers.phone_number}
                onChange={handleChange}
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
    </div>
);
};

export default CreateDriver;
