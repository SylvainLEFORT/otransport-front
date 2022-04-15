import { Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Mediaquery from 'react-responsive';
import './driverdelivery.scss';

const DriverDelivery = () => {
  const [deliveries, setDeliveries] = useState();
  const { id } = useParams();
  const token = sessionStorage.getItem('jwtToken');
  const idDriver = sessionStorage.getItem('id');

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

  const sendStatusStartDelivery = () => {
    axios.get(`http://localhost:8000/api/drivers/${idDriver}/deliveries/${id}/start`, config)
      .then((response) => {
        console.log(response);
        window.location = 'http://localhost:8080/driver';
      });
  };

  const sendStatusEndDelivery = () => {
    axios.get(`http://localhost:8000/api/drivers/${idDriver}/deliveries/${id}/end`, config)
      .then((response) => {
        console.log(response);
        window.location = 'http://localhost:8080/driver';
      });
  };

  return (
    <div>
      <div className="driver-delivery">
        {deliveries && (
          <Mediaquery minWidth={601}>
            <h1>Détail de la livraison</h1>
            <Link to="/driver">
              <Button className="button">Retour</Button>
            </Link>
            <div className="details">
              <h2>Nom du client</h2>
              <p>{deliveries.customer.name}</p>
              <h2>Adresse</h2>
              <p>{deliveries.customer.address}</p>
              <h2>Numéro de téléphone</h2>
              <p>{deliveries.customer.phoneNumber}</p>
              <h2>Type de marchandise</h2>
              <p>{deliveries.merchandise}</p>
              <h2>Quantité (en m³)</h2>
              <p>{deliveries.volume}</p>
              <h2>Commentaire</h2>
              <p>{deliveries.comment}</p>
              <div>{(() => {
                switch (deliveries.status) {
                  case 0: return <Button className="start-button" onClick={sendStatusStartDelivery}>Commencer la livraison</Button>;
                  case 1: return <Button className="end-button" onClick={sendStatusEndDelivery}>Terminer la livraison</Button>;
                  default: return '';
                }
              })()}
              </div>
            </div>
          </Mediaquery>
        )}
      </div>

      <div>
        {deliveries && (
          <Mediaquery maxWidth={600}>
            <h1 className="title-phone">Détail de la livraison</h1>
            <div className="details">
              <h2>Nom du client</h2>
              <p>{deliveries.customer.name}</p>
              <h2>Adresse</h2>
              <p>{deliveries.customer.address}</p>
              <h2>Type de marchandise</h2>
              <p>{deliveries.merchandise}</p>
              <h2>Quantité</h2>
              <p>{deliveries.volume}</p>
              <div>{(() => {
                switch (deliveries.status) {
                  case 0: return <Button className="start-button" onClick={sendStatusStartDelivery}>Commencer la livraison</Button>;
                  case 1: return <Button className="end-button" onClick={sendStatusEndDelivery}>Terminer la livraison</Button>;
                  default: return '';
                }
              })()}
              </div>
            </div>
          </Mediaquery>
        )}
      </div>
    </div>
  );
};

export default DriverDelivery;
