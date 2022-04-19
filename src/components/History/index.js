// == Import style
import './history.scss';

// == Import dependencies
import { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

// == Import required components
import NavBar from '../NavBar';

//  == Component
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
        <h1 className="title">Livraisons terminées</h1>
        <div className="trait" />
        <div className="deliveries-management">
          <ul>
            {delivery && delivery.map((item) => ((
              <li className="delivery" key={item.id}>
                <div className="detail-1">
                  <span>{item.customer.name}</span>
                  <span>{item.customer.address}</span>
                  <span>Descriptif livraison : {item.merchandise} / {item.volume}</span>
                </div>
                <div className="detail-2">
                  <span>Attribuée à : {item.driver?.lastname || '-'} {item.driver?.firstname || '-'} </span>
                  <span>Terminée le : {moment(item.updated_at).format('DD/MM/YYYY HH:mm')}</span>
                </div>
              </li>
            )))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// == Export component
export default History;
