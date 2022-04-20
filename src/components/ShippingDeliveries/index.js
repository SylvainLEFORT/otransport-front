// == Import style
import './shippingdeliveries.scss';

// == Import dependencies
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import Mediaquery from 'react-responsive';

// == Import required assets
import info from 'src/assets/docs/info.svg';

// == Import required components
import NavBar from '../NavBar';

//  == Component
const ShippingDeliveries = () => {
  const [deliveries, setDeliveries] = useState();

  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get('http://baltidus-server.eddi.cloud/apotheose/projet-03-o-transport-back/public/api/admin/deliveries/shipping', config)
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
          <ul>
            <li className="shipping-delivery">
              <Grid className="grid-deliveries">
                <Grid.Row>
                  <Grid.Column width={4}><span style={{ fontWeight: 'bold' }}>Numéro de livraison</span></Grid.Column>
                  <Grid.Column width={4}><span style={{ fontWeight: 'bold' }}>Chauffeur</span></Grid.Column>
                  <Grid.Column width={4}><span style={{ fontWeight: 'bold' }}>Client</span></Grid.Column>
                  <Grid.Column width={4}><span style={{ fontWeight: 'bold' }}>Détail de la livraison</span></Grid.Column>
                </Grid.Row>
              </Grid>
            </li>
            {deliveries && deliveries.map((item) => (
              <li className="shipping-delivery" key={item.id}>
                <Grid className="grid-deliveries">
                  <Grid.Row>
                    <Grid.Column width={4}><span>{item.id}</span></Grid.Column>
                    <Grid.Column width={4}>
                      <span>{item.driver.lastname} {item.driver.firstname}</span>
                    </Grid.Column>
                    <Grid.Column width={4}><span>{item.customer.name}</span></Grid.Column>
                    <Grid.Column width={4}>
                      <button type="button" className="button-utils">
                        <Link to={`/admin/delivery_detail/${item.id}`}>
                          <img src={info} alt="" className="info" />
                        </Link>
                      </button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </li>
            ))}
          </ul>
        </div>
      </Mediaquery>
      <Mediaquery maxWidth={600}>
        <NavBar />
        <div className="shipping-deliveries">
          <h1 className="title">Livraisons en cours</h1>
          <ul>
            {deliveries && deliveries.map((item) => (
              <li className="shipping-delivery" key={item.id}>
                <a>{item.id}</a>
                <span>{item.driver.lastname} {item.driver.firstname}</span>
                <span>{item.customer.name}</span>
                <button type="button" className="button-utils">
                  <a href={`http://localhost:8080/admin/delivery_detail/${item.id}`}>
                    <img src={info} alt="" className="info" />
                  </a>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Mediaquery>
    </div>
  );
};

// == Export component
export default ShippingDeliveries;
