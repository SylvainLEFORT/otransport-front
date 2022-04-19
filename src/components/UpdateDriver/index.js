/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import style
import './updatedriver.scss';

// == Import dependencies
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import axios from 'axios';

// == Import required components
import NavBar from '../NavBar';

//  == Component
const UpdateDriver = () => {
  const [driver, setDriver] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleFirstNameInputChange = (e) => {
    e.persist();
    setDriver(() => ({
      ...driver,
      firstname: e.target.value,
    }));
  };

  const handleLastNameInputChange = (e) => {
    e.persist();
    setDriver(() => ({
      ...driver,
      lastname: e.target.value,
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

  useEffect(() => {
    axios.get(`http://localhost:8000/api/admin/drivers/${id}`, config)
      .then((res) => {
        const resultDrive = res.data;
        console.log(resultDrive);
        setDriver(resultDrive);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8000/api/admin/drivers/${id}`, driver, config)
      .then((response) => {
        setDriver(response.data.updatedAt);
        const message = 'Chauffeur modifié !';
        navigate('/admin/drivers_management', { state: { message } });
      });
  };

  return (
    <div>
      <NavBar />

      <div className="create-driver">

        <h1 className="titre">Modifier un chauffeur</h1>
        <Link to="/admin/drivers_management" className="return">
          <Button>Retour</Button>
        </Link>
        {driver && (
        <div className="form">
          <Form onSubmit={handleSubmit}>
            <Form.Field className="input-1">
              <label>Prénom</label>
              <input
                type="text"
                name="firstname"
                defaultValue={driver.firstname}
                onChange={handleFirstNameInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Nom</label>
              <input
                type="text"
                name="lastname"
                defaultValue={driver.lastname}
                onChange={handleLastNameInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                defaultValue={driver.email}
                onChange={handleEmailInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Mot de passe</label>
              <input
                type="password"
                name="password"
                defaultValue={driver.password}
                onChange={handlePasswordInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Numéro de téléphone</label>
              <input
                type="tel"
                name="phone_number"
                defaultValue={driver.phoneNumber}
                onChange={handlePhoneNumberInputChange}
              />
            </Form.Field>
            <Button className="button" type="submit">Modifier le chauffeur</Button>
          </Form>
        </div>
        )}
      </div>
    </div>
  );
};

// == Export component
export default UpdateDriver;
