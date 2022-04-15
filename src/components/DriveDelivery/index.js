import { Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Mediaquery from 'react-responsive';
import './driverdelivery.scss';

const DriverDelivery = () => {
  const [deliveries, setDeliveries] = useState();

  const { id } = useParams();
  const navigate = useNavigate();
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
              <Button className="button" onClick={() => navigate(-1)}>Retour</Button>
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
              <Button className="button" onClick={() => navigate(-1)}>Retour</Button>
            </div>
          </Mediaquery>
        )}
      </div>
    </div>
  );
};

export default DriverDelivery;
