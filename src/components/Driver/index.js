import './driver.scss';
import { Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Mediaquery from 'react-responsive';

const Driver = () => {
  const [deliveries, setDeliveries] = useState();

  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const id = sessionStorage.getItem('id');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/drivers/${id}/deliveries`, config)
      .then((res) => {
        const resultDeliveries = res.data;
        setDeliveries(resultDeliveries);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="global">
          <Mediaquery minWidth={601}>
            <h1 className="titre">Mes livraisons</h1>
            {deliveries && deliveries.map((item) => (
              <a href={`http://localhost:8080/driver/delivery/${item.id}`}>
                <Button className="button detail" type="submit">
                  <div className="infosClient">
                    <p className="client">{item.customer.name}</p>
                    <p className="adresse">{item.customer.address}</p>
                  </div>
                  <div className="utilitaire">
                    <p className="statut">{(() => {
                      switch (item.status) {
                        case 0: return 'En attente de livraison';
                        case 1: return 'En cours de livraison';
                        default: return '';
                      }
                    })()}
                    </p>
                  </div>
                </Button>
              </a>
            ))}
          </Mediaquery>
        </div>

        <div>
          {deliveries && deliveries.map((item) => (
            <Mediaquery maxWidth={600}>
              <h1 className="title-phone">Mes livraisons</h1>
              <a href={`http://localhost:8080/driver/delivery/${item.id}`}>
                <Button className="button detail" type="submit">
                  <div className="infosClient-phone">
                    <p className="client">{item.customer.name}</p>
                    <p className="client">{(() => {
                      switch (item.status) {
                        case 0: return 'En attende de livraison';
                        case 1: return 'En cours de livraison';
                        default: return '';
                      }
                    })()}
                    </p>
                  </div>
                </Button>
              </a>
            </Mediaquery>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Driver;
