import { Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Mediaquery from 'react-responsive';
import './driverdelivery.scss';

const DriverDelivery = () => {
  const [deliveries, setDeliveries] = useState();

  const { id } = useParams();
  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/admin/deliveries/${id}`, config)
      .then((res) => {
        const resultDeliveries = res.data;
        setDeliveries(resultDeliveries);
        console.log(resultDeliveries);
      });
  }, []);

  return (
    <div>
      <div className="driver-delivery">
        {deliveries && (
          <Mediaquery minWidth={601}>
            <h1>Détail de la livraison</h1>
            <div className="details">
              <h2>Nom client</h2>
              <p>{deliveries.customer.name}</p>
              <h2>Adresse</h2>
              <p>{deliveries.customer.address}</p>
              <h2>Type de marchandise</h2>
              <p>{deliveries.merchandise}</p>
              <h2>Quantité (en mètre/cube)</h2>
              <p>{deliveries.volume}</p>
              <a href="http://localhost:8080/driver">
                <Button className="button">Retour</Button>
              </a>
            </div>
          </Mediaquery>
        )}
      </div>

      <div>
        {deliveries && (
          <Mediaquery maxWidth={600}>
            <h1 className="title-phone">Détail de la livraison</h1>
            <div className="details">
              <h2>Nom client</h2>
              <p>{deliveries.customer.name}</p>
              <h2>Adresse</h2>
              <p>{deliveries.customer.address}</p>
              <h2>Type de marchandise</h2>
              <p>{deliveries.merchandise}</p>
              <h2>Quantité</h2>
              <p>{deliveries.volume}</p>
              <a href="http://localhost:8080/driver">
                <Button className="button">Retour</Button>
              </a>
            </div>
          </Mediaquery>
        )}
      </div>
    </div>
  );
};

export default DriverDelivery;
