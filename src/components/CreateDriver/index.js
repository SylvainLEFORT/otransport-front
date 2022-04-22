/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import style
import './createdriver.scss';

// == Import dependencies
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

// == Import required components
import NavBar from '../NavBar';

//  == Component
const CreateDriver = () => {
  const [driver, setDriver] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setErrMsg([]);
  }, [driver]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post('http://celia-tosic-server.eddi.cloud/projet-03-o-transport-back/public/api/admin/drivers', driver, config);
    const errors = [];
    errors.push(response.data.firstname);
    errors.push(response.data.lastname);
    errors.push(response.data.email);
    errors.push(response.data.password);
    errors.push(response.data.phoneNumber);
    setErrMsg(errors);
    if (response.status === 201) {
      const message = 'Chauffeur créé !';
      navigate('/admin/drivers_management', { state: { message } });
    }
  };

  return (
    <div>
      <NavBar />

      <div className="create-driver">

        <h1 className="titre">Création d'un chauffeur</h1>

        <Link to="/admin/drivers_management" className="return">
          <Button>Retour</Button>
        </Link>

        <div className="form">
          <Form onSubmit={handleSubmit}>
            { errMsg && (
              <div>
                <Form.Field className="input-1">
                  <label>Prénom</label>
                  <span className="error">{ errMsg[0] } </span>
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
                  <span className="error">{errMsg[1]} </span>
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
                  <span className="error">{errMsg[2]} </span>
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
                  <span className="error">{errMsg[3]} </span>
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
                  <span className="error">{errMsg[4]} </span>
                  <input
                    placeholder="Veuillez insérer le numéro de téléphone"
                    type="tel"
                    name="phone_number"
                    value={driver.phoneNumber}
                    onChange={handlePhoneNumberInputChange}
                  />
                </Form.Field>
              </div>
            )}
            <a to="/admin/drivers_management">
              <Button className="button add-driver" type="submit">Créer un chauffeur</Button>
            </a>
          </Form>
        </div>
      </div>
    </div>
  );
};

// == Export component
export default CreateDriver;
