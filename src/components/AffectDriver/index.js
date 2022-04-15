import './affectdriver.scss';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import affect from 'src/assets/docs/affect.svg';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import NavBar from '../NavBar';

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

  const sendIDDriver = (readDriverId) => () => {
    axios.put(`http://localhost:8000/api/admin/deliveries/${id}/affect`, { id: readDriverId }, config)
      .then((response) => {
        console.log(response);
        setDrivers(response.data.updatedAt);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="board">
      <NavBar />
      <h1 className="title">Affectation chauffeur</h1>
      <div className="pending-deliveries">

        <ul>
          <li className="pending-delivery">
            <span style={{ fontWeight: 'bold' }} xs={3}>Nom</span>
            <span style={{ fontWeight: 'bold' }} xs={3}>Prénom</span>
            <span style={{ fontWeight: 'bold' }} xs={3}>Choisir un chauffeur</span>
          </li>
          <Form onSubmit={handleSubmit}>
            {driver && driver.map((item) => (
              <li className="pending-delivery">
                <p type="text" value={item.id}>{item.lastname}</p>
                <span xs={3}>{item.firstname}</span>
                <span xs={3}>{item.lastnames}</span>
                <div className="utils">
                  <button
                    type="submit"
                    value={item.id}
                    onClick={sendIDDriver(item.id)}
                    className="button-utils"
                    name="button"
                  >
                    <img src={affect} alt="" className="affect" />
                  </button>
                </div>
              </li>
            ))}
          </Form>
        </ul>
        <Link to="/admin/pending_deliveries">
          <button type="button">Retour</button>
        </Link>
      </div>
    </div>
  );
};
export default AffectDriver;
