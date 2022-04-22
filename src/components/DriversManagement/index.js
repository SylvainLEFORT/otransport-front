// == Import style
import './driversmanagement.scss';

// == Import dependencies
import { Button, Grid } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Mediaquery from 'react-responsive';
import FlashMessage from 'react-flash-message';

// == Import required assets
import Patrick from 'src/assets/docs/patrick.png';
import info from 'src/assets/docs/info.svg';
import edit from 'src/assets/docs/edit.svg';
import trash from 'src/assets/docs/trash.svg';

// == Import required components
import NavBar from '../NavBar';

//  == Component
const DriversManagement = () => {
  const [drivers, setDrivers] = useState();
  const [status, setStatus] = useState(false);
  const location = useLocation();
  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const deleteDriver = (readDriverId) => async () => {
    const confirmed = window.confirm('Etes-vous sûr de vouloir supprimer le chauffeur ?');
    if (confirmed) {
      await axios.delete(`http://celia-tosic-server.eddi.cloud/projet-03-o-transport-back/public/api/admin/drivers/${readDriverId}`, config);
      // On change la valeur de drivers pour supprimer le chauffeur des données front
      // sans devoir refaire un appel API
      setStatus(true);
      setDrivers((prevValue) => {
      // On filter le tableau pour garder tous les chauffeurs sauf celui qu'on a supprimé
        const newDrivers = prevValue.filter((driver) => driver.id !== readDriverId);
        return newDrivers;
      });
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/admin/drivers', config)
      .then((res) => {
        const driver = res.data;
        setDrivers(driver);
      });
  }, []);

  return (
    <div>
      <Mediaquery minWidth={601}>
        <NavBar />
        <div className="drivers-management">
          <h1 className="title">Gestion des chauffeurs</h1>
          {status && (
          <FlashMessage duration={5000}>
            <strong className="flash-message">Chauffeur supprimé !</strong>
          </FlashMessage>
          )}
          {location.state?.message && (
          <FlashMessage duration={5000}>
            <strong className="flash-message"> {location.state.message}</strong>
          </FlashMessage>
          )}
          <div className="button">
            <Link to="/admin/create_driver">
              <Button className="add-driver">Ajouter un chauffeur</Button>
            </Link>
          </div>
        </div>
        <ul>
          <li className="driver-list">
            <Grid className="grid-drivers">
              <Grid.Row>
                <Grid.Column width={2}><span /></Grid.Column>
                <Grid.Column width={3}><span style={{ fontWeight: 'bold' }}>Prénom</span></Grid.Column>
                <Grid.Column width={3}><span style={{ fontWeight: 'bold' }}>Nom</span></Grid.Column>
                <Grid.Column width={3}><span style={{ fontWeight: 'bold' }}>Email</span></Grid.Column>
                <Grid.Column width={2}><span style={{ fontWeight: 'bold' }}>Disponibilité</span></Grid.Column>
              </Grid.Row>
            </Grid>
          </li>
          {drivers && drivers.map((item) => (
            <li className="driver-list" key={item.id}>
              <Grid className="grid-deliveries">
                <Grid.Row>
                  <Grid.Column width={2}><img src={Patrick} alt="" className="avatar" /></Grid.Column>
                  <Grid.Column width={3}><span>{item.firstname}</span></Grid.Column>
                  <Grid.Column width={3}><span>{item.lastname}</span></Grid.Column>
                  <Grid.Column width={3}><span>{item.email}</span></Grid.Column>
                  <Grid.Column width={2}>
                    <span>{(() => {
                      switch (item.status) {
                        case 0: return <span className="dot-green" />;
                        case 1: return <span className="dot-red" />;
                        default: return 'Disponible';
                      }
                    })()}
                    </span>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <div className="driver-utils">
                      <Link to={`/admin/driver_informations/${item.id}`}>
                        <button type="button" className="buttons-utils">
                          <img src={info} alt="" className="info" />
                        </button>
                      </Link>
                      <Link to={`/admin/update_driver/${item.id}`}>
                        <button type="button" className="buttons-utils">
                          <img src={edit} alt="" className="edit" />
                        </button>
                      </Link>
                      <div>{(() => {
                        if (item.status === 0) {
                          return (
                            <button type="button" className="buttons-utils" onClick={deleteDriver(item.id)}>
                              <img src={trash} alt="" className="trash" />
                            </button>
                          );
                        } return null;
                      }
                      )()}
                      </div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </li>
          ))}
        </ul>
      </Mediaquery>
      <Mediaquery maxWidth={600}>
        <NavBar />
        <div className="drivers-management">
          <h1 className="title">Gestion des chauffeurs</h1>

          <div className="button">
            <Link to="/admin/create_driver">
              <Button>Ajouter un chauffeur</Button>
            </Link>
          </div>
        </div>
        <ul>
          { drivers && drivers.map((item) => (
            <li className="driver-list" key={item.id}>
              <img src={Patrick} alt="" className="avatar" />
              <span>{item.firstname}</span>
              <span>{item.lastname}</span>
              <span>{(() => {
                switch (item.status) {
                  case 0: return 'Disponible';
                  case 1: return 'En cours de livraison';
                  default: return 'Disponible';
                }
              })()}
              </span>
              <div className="driver-utils">
                <Link to={`/admin/driver_informations/${item.id}`}>
                  <img src={info} alt="" className="info" />
                </Link>
                <img src={edit} alt="" className="edit" />
                <button type="button" onClick={deleteDriver(item.id)}>
                  <img src={trash} alt="" className="trash" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Mediaquery>
    </div>
  );
};

// == Export component
export default DriversManagement;
