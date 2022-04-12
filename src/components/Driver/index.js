import './driver.scss';

import { Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Mediaquery from 'react-responsive';

const Driver = () => {
  const [deliveries, setDeliveries] = useState();

  useEffect(() => {
    axios.get('http://0.0.0.0:8000/api/admin/deliveries/shipping')
      .then((res) => {
        const resultDeliveries = res.data;
        console.log(resultDeliveries);
        setDeliveries(resultDeliveries);
      });
  }, []);

  useEffect(() => {
    axios.get('http://0.0.0.0:8000/api/admin/deliveries/pending')
      .then((res) => {
        const resultDeliveries = res.data;
        console.log(resultDeliveries);
        setDeliveries(resultDeliveries);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="gobal">
          <h1 className="titre">Livraisons en cours</h1>
          {deliveries && deliveries.map((item) => (
            <Mediaquery minWidth={601}>
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
            </Mediaquery>
          ))}
        </div>

        <div>
          {deliveries && deliveries.map((item) => (
            <Mediaquery maxWidth={600}>
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
      </div>
    </div>
  );
};

export default Driver;
