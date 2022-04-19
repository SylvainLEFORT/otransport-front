// == Import style
import './deliverydetail.scss';

// == Import dependencies
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import Mediaquery from 'react-responsive';

// == Import required components
import NavBar from '../NavBar';

//  == Component
const DeliveryDetail = () => {
  const [delivery, setDelivery] = useState(null);

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
          <h2>Nom du client</h2>
          <p>{delivery.customer.name}</p>
          <h2>Adresse</h2>
          <p>{delivery.customer.address}</p>
          <h2>Numéro de téléphone</h2>
          <p>{delivery.customer.phoneNumber}</p>
          <h2>Type de marchandise</h2>
          <p>{delivery.merchandise}</p>
          <h2>Quantité (en m³)</h2>
          <p>{delivery.volume}</p>
          <h2>Commentaire de livraison</h2>
          <p>{delivery.comment}</p>
          <Button className="button" onClick={() => navigate(-1)}>Retour</Button>
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
          <Button className="button" onClick={() => navigate(-1)}>Retour</Button>
        </div>
        )}
      </Mediaquery>
    </div>
  );
};

// == Export component
export default DeliveryDetail;
