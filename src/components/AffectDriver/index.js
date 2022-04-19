// == Import style
import './affectdriver.scss';
// == Import dependencies
import { Form, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
// == Import required pictures
import affect from 'src/assets/docs/affect.svg';
// == Import required components
import NavBar from '../NavBar';

//  == Component
const AffectDriver = () => {
  const [driver, setDrivers] = useState();
  const { id } = useParams();
  const token = sessionStorage.getItem('jwtToken');

  const navigate = useNavigate();

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
        const message = 'Chauffeur affecté à la livraison !';
        navigate('/admin/pending_deliveries', { state: { message } });
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

// == Export component
export default AffectDriver;
