// == Import style
import './driverinfos.scss';

// == Import dependencies
import { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// == Import required components
import NavBar from '../NavBar';

//  == Component
const DriverInfos = () => {
  const [driver, setDriver] = useState(null);

  const { id } = useParams();

  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get(`http://baltidus-server.eddi.cloud/apotheose/projet-03-o-transport-back/public/api/admin/drivers/${id}`, config)
      .then((res) => {
        const resultDrive = res.data;
        console.log(resultDrive);
        setDriver(resultDrive);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Détail du chauffeur</h1>
      {driver && (
        <div className="details">
          <h2>Nom chauffeur</h2>
          <p>{driver.firstname} {driver.lastname}</p>
          <h2>E-mail</h2>
          <p>{driver.email}</p>
          <h2>Numéro de téléphone</h2>
          <p>{driver.phoneNumber}</p>
          <h2>Status</h2>
          <span>{(() => {
            switch (driver.status) {
              case 0: return 'Disponible';
              case 1: return 'En cours de livraison';
              default: return 'Disponible';
            }
          })()}
          </span>
          <Link to="/admin/drivers_management">
            <Button className="button">Retour</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

// == Export component
export default DriverInfos;
