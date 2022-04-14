import './history.scss';
import { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import NavBar from '../NavBar';

const History = () => {
  const [delivery, setDelivery] = useState(null);

  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get('http://0.0.0.0:8000/api/admin/deliveries/completed', config)
      .then((res) => {
        const resultDelivery = res.data;
        console.log(resultDelivery);
        setDelivery(resultDelivery);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="historique">
        <h1 className="title">Historique des livraisons</h1>
        <div className="trait" />
        <div className="deliveries-management">
          <ul>
            {delivery && delivery.map((item) => ((
              <li className="delivery">
                <div className="detail-1">
                  <span>{item.customer.name}</span>
                  <span>{item.customer.address}</span>
                  <span>Descriptif livraison : {item.merchandise} / {item.volume}</span>
                </div>
                <div className="detail-2">
                  <span>Attribuée à : {item.driver.lastname} {item.driver.firstname}</span>
                  <span>{moment(item.updatedAt).format('DD/MM/YYYY HH:mm')}</span>
                </div>
              </li>
            )))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default History;
