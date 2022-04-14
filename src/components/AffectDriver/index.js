import './affectdriver.scss';
import affect from 'src/assets/docs/affect.svg';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import NavBar from '../NavBar';
import { Form } from 'semantic-ui-react';

const AffectDriver = () => {
  const [driver, setDrivers] = useState();
  const { id } = useParams();
  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/admin/drivers', config)
      .then((res) => {
        const drivers = res.data;
        console.log(drivers);
        setDrivers(drivers);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = `id: ${event.target.button.value}`;
    console.log(value);

    axios.put(`http://localhost:8000/api/admin/deliveries/${id}`, value, config)
      .then((response) => {
        console.log(response);
        setDrivers(response.data.updatedAt);
      });
  };

  return (
    <div className="board">
      <NavBar />
      <h1 className="title">Affectation chauffeur</h1>
      <div className="pending-deliveries">
        <div className="trait" />
        <ul>
          <li className="pending-delivery">
            <span style={{ fontWeight: 'bold' }} xs={3}>Nom</span>
            <span style={{ fontWeight: 'bold' }} xs={3}>Prénom</span>
            <span style={{ fontWeight: 'bold' }} xs={3}>Choisir un chauffeur</span>
          </li>
          {driver && driver.map((item) => (
            <Form onSubmit={handleSubmit}>
              <li className="pending-delivery">
                <a>{item.id}</a>
                <span xs={3}>{item.firstname}</span>
                <span xs={3}>{item.lastnames}</span>
                <div className="utils">
                  <button
                    value={item.id}
                    type="submit"
                    className="button-utils"
                    name="button"
                  >
                    <img src={affect} alt="" className="affect" />
                  </button>
                </div>
              </li>
            </Form>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AffectDriver;
