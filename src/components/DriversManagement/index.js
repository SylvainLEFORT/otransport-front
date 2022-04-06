import './driversmanagement.scss';

import { Button } from 'semantic-ui-react';
import React from 'react';
import axios from 'axios';
import Mediaquery from 'react-responsive';

import Patrick from 'src/assets/docs/patrick.png';
import info from 'src/assets/docs/info.svg';
import edit from 'src/assets/docs/edit.svg';
import trash from 'src/assets/docs/trash.svg';

import NavBar from '../NavBar';

export default class DriversManagement extends React.Component {
  state = {
    drivers: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/drivers')
      .then((res) => {
        const drivers = res.data;
        this.setState({ drivers });
      });
  }

  render() {
    return (
      <div>
        <Mediaquery minWidth={601}>
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
            { this.state.drivers.map((driver) => (
              <li className="driver-list">
                <img src={Patrick} alt="" className="avatar" />
                <span>{driver.firstname}</span>
                <span>{driver.lastname}</span>
                <span>{driver.email}</span>
                <span>{(() => {
                  switch (driver.status) {
                    case 0: return 'Disponible';
                    case 1: return 'En cours de livraison';
                    default: return 'Disponible';
                  }
                })()}
                </span>
                <div className="driver-utils">
                  <a href="http://localhost:8080/admin/driver_informations">
                    <img src={info} alt="" className="info" />
                  </a>
                  <img src={edit} alt="" className="edit" />
                  <img src={trash} alt="" className="trash" />
                </div>
              </li>
            ))}
          </ul>
        </Mediaquery>
        <Mediaquery maxWidth={600}>
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
            { this.state.drivers.map((driver) => (
              <li className="driver-list">
                <img src={Patrick} alt="" className="avatar" />
                <span>{driver.firstname}</span>
                <span>{driver.lastname}</span>
                <span>{driver.email}</span>
                <span>{(() => {
                  switch (driver.status) {
                    case 0: return 'Disponible';
                    case 1: return 'En cours de livraison';
                    default: return 'Disponible';
                  }
                })()}
                </span>
                <div className="driver-utils">
                  <img src={info} alt="" className="info" />
                  <img src={edit} alt="" className="edit" />
                  <img src={trash} alt="" className="trash" />
                </div>
              </li>
            ))}
          </ul>
        </Mediaquery>
      </div>
    );
  }
}
