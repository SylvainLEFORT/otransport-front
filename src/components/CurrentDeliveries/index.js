import './currentdeliveries.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Mediaquery from 'react-responsive';
import NavBar from '../NavBar';

const CurrentDeliveries = () => {
  const [deliveries, setDeliveries] = useState();

  useEffect(() => {
    axios.get('http://0.0.0.0:8000/api/admin/deliveries/pending')
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
        <div className="current-deliveries">
          <h1 className="title">Livraisons en cours</h1>
          <div className="trait" />
          <ul>
            {deliveries && deliveries.map((item) => (
              <li className="current-delivery">
                <a>{item.id}</a>
                <span>{item.driver.lastname} {item.driver.firstname}</span>
                <span>{item.customer.name}</span>
                <a>Détail</a>
              </li>
            ))}
          </ul>
        </div>
      </Mediaquery>
      <Mediaquery maxWidth={600}>
        <NavBar />
        <div className="current-deliveries">
          <h1 className="title">Livraisons en cours</h1>
          <div className="trait" />
          <ul>
            <li className="current-delivery">
              <a>Chauffeur 1</a>
              <span>n° de livraison</span>
              <span>adresse de livraison</span>
              <a>Détail</a>
            </li>
            <li className="current-delivery">
              <a>Chauffeur 2</a>
              <span>n° de livraison</span>
              <span>adresse de livraison</span>
              <a>Détail</a>
            </li>
            <li className="current-delivery">
              <a>Chauffeur 3</a>
              <span>n° de livraison</span>
              <span>adresse de livraison</span>
              <a>Détail</a>
            </li>
            <li className="current-delivery">
              <a>Chauffeur 4</a>
              <span>n° de livraison</span>
              <span>adresse de livraison</span>
              <a>Détail</a>
            </li>
            <li className="current-delivery">
              <a>Chauffeur 5</a>
              <span>n° de livraison</span>
              <span>adresse de livraison</span>
              <a>Détail</a>
            </li>
          </ul>
        </div>
      </Mediaquery>
    </div>
  );
};

export default CurrentDeliveries;
