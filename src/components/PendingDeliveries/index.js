import './pendingdeliveries.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Mediaquery from 'react-responsive';
import info from 'src/assets/docs/info.svg';
import edit from 'src/assets/docs/edit.svg';
import trash from 'src/assets/docs/trash.svg';
import affect from 'src/assets/docs/affect.svg';
import NavBar from '../NavBar';

const PendingDeliveries = () => {
  const [deliveries, setDeliveries] = useState();

  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get('http://0.0.0.0:8000/api/admin/deliveries/pending', config)
      .then((res) => {
        const resultDeliveries = res.data;
        console.log(resultDeliveries);
        setDeliveries(resultDeliveries);
      });
  }, []);

  const deleteDelivery = (readDeliveryId) => async () => {
    await axios.delete(`http://localhost:8000/api/admin/deliveries/${readDeliveryId}`, config);
    // On change la valeur de drivers pour supprimer le chauffeur des données front
    // sans devoir refaire un appel API
    setDeliveries((prevValue) => {
      // On filter le tableau pour garder tous les chauffeurs sauf celui qu'on a supprimé
      const newDelivery = prevValue.filter((delivery) => delivery.id !== readDeliveryId);
      return newDelivery;
    });
  };

  return (
    <div>
      <Mediaquery minWidth={601}>
        <NavBar />
        <div className="pending-deliveries">
          <h1 className="title">Livraisons en attente</h1>
          <div className="trait" />
          <ul>
            <li className="pending-delivery">
              <span style={{ fontWeight: 'bold' }} xs={3}>Id de la livraison</span>
              <span style={{ fontWeight: 'bold' }} xs={3}>Client</span>
              <span style={{ fontWeight: 'bold' }} xs={3}>Adresse</span>
              <span style={{ fontWeight: 'bold' }} xs={3}>Détail de la livraison</span>
            </li>
            {deliveries && deliveries.map((item) => (
              <li className="pending-delivery">
                <a>{item.id}</a>
                <span xs={3}>{item.customer.name}</span>
                <span xs={3}>{item.customer.address}</span>
                <div className="utils">
                  <button type="button" className="button-utils">
                    <Link to={`/admin/driver_affect_deliveries/${item.id}`}>
                      <img src={affect} alt="" className="affect" />
                    </Link>
                  </button>
                  <button type="button" className="button-utils">
                    <Link to={`/admin/delivery_detail/${item.id}`}>
                      <img src={info} alt="" className="info" />
                    </Link>
                  </button>
                  <button type="button" className="button-utils">
                    <Link to={`/admin/update_delivery/${item.id}`}>
                      <img src={edit} alt="" className="edit" />
                    </Link>
                  </button>
                  <button type="button" className="button-utils" onClick={deleteDelivery(item.id)}>
                    <img src={trash} alt="" className="trash" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Mediaquery>
      <Mediaquery maxWidth={600}>
        <NavBar />
        <div className="pending-deliveries">
          <h1 className="title">Livraisons en cours</h1>
          <div className="trait" />
          <ul>
            {deliveries && deliveries.map((item) => (
              <li className="pending-delivery">
                <a>{item.id}</a>
                <span>{item.customer.name}</span>
                <a href={`http://localhost:8080/admin/delivery_detail/${item.id}`}>Détail</a>
              </li>
            ))}
          </ul>
        </div>
      </Mediaquery>
    </div>
  );
};

export default PendingDeliveries;
