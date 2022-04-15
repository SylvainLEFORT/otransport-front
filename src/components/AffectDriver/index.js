import './affectdriver.scss';
import { Form, Button, Grid } from 'semantic-ui-react';
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
        window.location = 'http://localhost:8080/admin/pending_deliveries';
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
            <Grid className="grid-affectDriver">
              <Grid.Row>
                <Grid.Column width={5}><span style={{ fontWeight: 'bold' }}>Nom</span></Grid.Column>
                <Grid.Column width={5}><span style={{ fontWeight: 'bold' }}>Prénom</span></Grid.Column>
                <Grid.Column width={5}><span style={{ fontWeight: 'bold' }}>Choisir un chauffeur</span></Grid.Column>
              </Grid.Row>
            </Grid>
          </li>
          <Form onSubmit={handleSubmit}>
            {driver && driver.map((item) => (
              <li className="pending-delivery">
                <Grid className="grid-affectDriver">
                  <Grid.Row>
                    <Grid.Column width={5}><span type="text" value={item.id} className="name-affect">{item.lastname}</span></Grid.Column>
                    <Grid.Column width={5}><span className="name-affect">{item.firstname}</span></Grid.Column>
                    <Grid.Column width={5}>
                      <div className="affect-utils">
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
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </li>
            ))}
          </Form>
        </ul>
        <Link to="/admin/pending_deliveries">
          <Button type="button" className="affect-backButton">Retour</Button>
        </Link>
      </div>
    </div>
  );
};
export default AffectDriver;
