import './driverinfos.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../NavBar';

const DriverInfos = () => {
  const [driver, setDriver] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/drivers/${id}`)
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

export default DriverInfos;
