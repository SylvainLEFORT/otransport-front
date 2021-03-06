import './deliverydetail.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Button } from 'semantic-ui-react';
import Mediaquery from 'react-responsive';

import NavBar from '../NavBar';

const DeliveryDetail = () => {
  const [delivery, setDelivery] = useState(null);

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
        const resultDelivery = res.data;
        setDelivery(resultDelivery);
      });
  }, []);

  return (
    <div className="driver-delivery">
      <Mediaquery minWidth={601}>
        <NavBar />
        <h1>Détail de la livraison</h1>
        {delivery && (
        <div className="details">
          <h2>Nom client</h2>
          <p>{delivery.customer.name}</p>
          <h2>Adresse</h2>
          <p>{delivery.customer.address}</p>
          <h2>Numéro de téléphone</h2>
          <p>{delivery.customer.phoneNumber}</p>
          <h2>Type de marchandise</h2>
          <p>{delivery.merchandise}</p>
          <h2>Quantité</h2>
          <p>{delivery.volume}</p>
          <h2>Commentaire de livraison</h2>
          <p>{delivery.comment}</p>
          <h2>Chauffeur attribué</h2>
          <p>{delivery.driver.firstname} {delivery.driver.lastname}</p>
          <a href="http://localhost:8080/admin/shipping_deliveries">
            <Button className="button">Retour</Button>
          </a>
        </div>
        )}
      </Mediaquery>
      <Mediaquery maxWidth={600}>
        <NavBar />
        <h1 className="title-phone">Détail de la livraison</h1>
        {delivery && (
        <div className="details">
          <h2>Nom client</h2>
          <p>{delivery.customer.name}</p>
          <h2>Adresse</h2>
          <p>{delivery.customer.address}</p>
          <h2>Type de marchandise</h2>
          <p>{delivery.merchandise}</p>
          <h2>Quantité</h2>
          <p>{delivery.volume}</p>
          <h2>Chauffeur attribué</h2>
          <p>{delivery.driver.firstname} {delivery.driver.lastname}</p>
          <a href="http://localhost:8080/admin/shipping_deliveries">
            <Button className="button">Retour</Button>
          </a>
        </div>
        )}
      </Mediaquery>
    </div>
  );
};
export default DeliveryDetail;
