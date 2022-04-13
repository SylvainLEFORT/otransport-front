import './driverlist.scss';

import { Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Mediaquery from 'react-responsive';

const DriverList = () => {
  const [deliveries, setDeliveries] = useState();

  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get('/api/drivers/2/deliveries', config)
      .then((res) => {
        const resultDeliveries = res.data;
        console.log(resultDeliveries);
        setDeliveries(resultDeliveries);
      });
  }, []);

  return (
    <div className="gobal">
      {deliveries && deliveries.map((item) => (
        <Mediaquery maxWidth={600}>
          <div className="driverList">
            <div className="infosClient">
              <p className="client">{item.customer.name}</p>
              <p className="adresse">{item.customer.address}</p>
            </div>
            <div className="utilitaire">
              <p className="statut">{(() => {
                switch (item.status) {
                  case 0: return 'En attende de livraison';
                  case 1: return 'En cours de livraison';
                  default: return '';
                }
              })()}
              </p>
              <a href={`http://localhost:8080/driver/delivery/${item.id}`}>
                <Button className="button" type="submit">Détails</Button>
              </a>
            </div>
          </div>
          <div className="driverList-phone">
            <div className="infosClient-phone">
              <p className="client">{item.customer.name}</p>
            </div>
            <div className="utilitaire-phone">
              <a href={`http://localhost:8080/driver/delivery/${item.id}`}>
                <Button className="button" type="submit">Détails</Button>
              </a>
            </div>
          </div>
        </Mediaquery>
      ))}
    </div>
  );
};

export default DriverList;
