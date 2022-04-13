import './driversmanagement.scss';

import { Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Mediaquery from 'react-responsive';

import Patrick from 'src/assets/docs/patrick.png';
import info from 'src/assets/docs/info.svg';
import edit from 'src/assets/docs/edit.svg';
import trash from 'src/assets/docs/trash.svg';

import HeaderLogged from '../Header';
import NavBar from '../NavBar';

const DriversManagement = () => {
  const [drivers, setDrivers] = useState();

  const deleteDriver = (readDriverId) => async () => {
    await axios.delete(`http://localhost:8000/api/admin/drivers/${readDriverId}`);
    // On change la valeur de drivers pour supprimer le chauffeur des données front
    // sans devoir refaire un appel API
    setDrivers((prevValue) => {
      // On filter le tableau pour garder tous les chauffeurs sauf celui qu'on a supprimé
      const newDrivers = prevValue.filter((driver) => driver.id !== readDriverId);
      return newDrivers;
    });
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/admin/drivers')
      .then((res) => {
        const driver = res.data;
        setDrivers(driver);
      });
  }, []);

  return (
    <div>
      <Mediaquery minWidth={601}>
        <HeaderLogged />
        <NavBar />
        <div className="drivers-management">
          <h1 className="title">Gestion des chauffeurs</h1>

          <div className="trait" />

          <div className="button">
            <Link to="/admin/create_driver">
              <Button>Ajouter un chauffeur</Button>
            </Link>
          </div>
        </div>
        <ul>
          {drivers && drivers.map((item) => (
            <li className="driver-list">
              <img src={Patrick} alt="" className="avatar" />
              <span>{item.firstname}</span>
              <span>{item.lastname}</span>
              <span>{item.email}</span>
              <span>{(() => {
                switch (item.status) {
                  case 0: return <span className="dot-green" />;
                  case 1: return <span className="dot-red" />;
                  default: return 'Disponible';
                }
              })()}
              </span>
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
                <button type="button" className="buttons-utils" onClick={deleteDriver(item.id)}>
                  <img src={trash} alt="" className="trash" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Mediaquery>
      <Mediaquery maxWidth={600}>
        <HeaderLogged />
        <NavBar />
        <div className="drivers-management">
          <h1 className="title">Gestion des chauffeurs</h1>

          <div className="trait" />

          <div className="button">
            <a href="http://localhost:8080/admin/create_driver">
              <Button>Ajouter un chauffeur</Button>
            </a>
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

export default DriversManagement;
