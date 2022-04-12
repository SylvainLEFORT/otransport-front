import './shippingdeliveries.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Mediaquery from 'react-responsive';
import NavBar from '../NavBar';

const ShippingDeliveries = () => {
  const [deliveries, setDeliveries] = useState();

  useEffect(() => {
    axios.get('http://0.0.0.0:8000/api/admin/deliveries/shipping')
      .then((res) => {
        const resultDeliveries = res.data;
        console.log(resultDeliveries);
        setDeliveries(resultDeliveries);
      });
  }, []);

  return (
    <div>
      <Mediaquery minWidth={601}>
        <NavBar />
        <div className="shipping-deliveries">
          <h1 className="title">Livraisons en cours</h1>
          <div className="trait" />
          <ul>
            <li className="shipping-delivery">
              <span style={{ fontWeight: 'bold' }} xs={3}>Id de la livraison</span>
              <span style={{ fontWeight: 'bold' }} xs={3}>Chauffeur</span>
              <span style={{ fontWeight: 'bold' }} xs={3}>Client</span>
              <span style={{ fontWeight: 'bold' }} xs={3}>Détail de la livraison</span>
            </li>
            {deliveries && deliveries.map((item) => (
              <li className="shipping-delivery">
                <a>{item.id}</a>
                <span>{item.driver.lastname} {item.driver.firstname}</span>
                <span>{item.customer.name}</span>
                <a href={`http://localhost:8080/admin/delivery_detail/${item.id}`}>Détail</a>
              </li>
            ))}
          </ul>
        </div>
      </Mediaquery>
      <Mediaquery maxWidth={600}>
        <NavBar />
        <div className="shipping-deliveries">
          <h1 className="title">Livraisons en cours</h1>
          <div className="trait" />
          <ul>
            {deliveries && deliveries.map((item) => (
              <li className="shipping-delivery">
                <a>{item.id}</a>
                <span>{item.driver.lastname} {item.driver.firstname}</span>
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

export default ShippingDeliveries;
