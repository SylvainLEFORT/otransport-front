/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import './createdriver.scss';

const CreateDriver = () => {
  const [driver, setDriver] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleFirstNameInputChange = (e) => {
    e.persist();
    setDriver(() => ({
      ...driver,
      firstName: e.target.value,
    }));
  };

  const handleLastNameInputChange = (e) => {
    e.persist();
    setDriver(() => ({
      ...driver,
      lastName: e.target.value,
    }));
  };

  const handleEmailInputChange = (e) => {
    e.persist();
    setDriver(() => ({
      ...driver,
      email: e.target.value,
    }));
  };

  const handlePasswordInputChange = (e) => {
    e.persist();
    setDriver(() => ({
      ...driver,
      password: e.target.value,
    }));
  };

  const handlePhoneNumberInputChange = (e) => {
    e.persist();
    setDriver(() => ({
      ...driver,
      phoneNumber: e.target.value,
    }));
  };

  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/admin/drivers', driver, config)
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
                value={driver.firstName}
                onChange={handleFirstNameInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Nom</label>
              <input
                placeholder="Veuillez insérer le nom"
                type="text"
                name="lastname"
                value={driver.lastName}
                onChange={handleLastNameInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>E-mail</label>
              <input
                placeholder="Veuillez insérer l'e-mail"
                type="email"
                name="email"
                value={driver.email}
                onChange={handleEmailInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Mot de passe</label>
              <input
                placeholder="Veuillez insérer le mot de passe"
                type="password"
                name="password"
                value={driver.password}
                onChange={handlePasswordInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Numéro de téléphone</label>
              <input
                placeholder="Veuillez insérer le numéro de téléphone"
                type="tel"
                name="phone_number"
                value={driver.phoneNumber}
                onChange={handlePhoneNumberInputChange}
              />
            </Form.Field>
            <a to="/admin/drivers_management">
              <Button className="button" type="submit">Créer un chauffeur</Button>
            </a>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateDriver;
