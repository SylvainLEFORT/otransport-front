/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import style
import './updatedelivery.scss';

// == Import dependencies
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

// == Import required components
import NavBar from '../NavBar';

//  == Component
const UpdateDelivery = () => {
  const [delivery, setDelivery] = useState();
  const { id } = useParams();

  const handleMerchandiseInputChange = (e) => {
    e.persist();
    setDelivery(() => ({
      ...delivery,
      merchandise: e.target.value,
    }));
  };

  const handleVolumeInputChange = (e) => {
    e.persist();
    setDelivery(() => ({
      ...delivery,
      volume: Number(e.target.value),
    }));
  };

  const handleCommentInputChange = (e) => {
    e.persist();
    setDelivery(() => ({
      ...delivery,
      comment: e.target.value,
    }));
  };

  const handleCustomerNameInputChange = (e) => {
    e.persist();
    setDelivery(() => ({
      ...delivery,
      customer: {
        ...delivery.customer,
        name: e.target.value,
      },
    }));
  };

  const handleCustomerAddressInputChange = (e) => {
    e.persist();
    setDelivery(() => ({
      ...delivery,
      customer: {
        ...delivery.customer,
        address: e.target.value,
      },
    }));
  };

  const handleCustomerPhoneNumberInputChange = (e) => {
    e.persist();
    setDelivery(() => ({
      ...delivery,
      customer: {
        ...delivery.customer,
        phoneNumber: e.target.value,
      },
    }));
  };

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
        console.log(resultDelivery);
        setDelivery(resultDelivery);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(delivery);
    axios.put(`http://localhost:8000/api/admin/deliveries/${id}`, delivery, config)
      .then((response) => {
        console.log(response);
        setDelivery(response.data.updatedAt);
        window.location = 'http://localhost:8080/admin/pending_deliveries';
      });
  };

  return (
    <div>
      <NavBar />

      <div className="create-driver">

        <h1 className="titre">Modifier une livraison</h1>
        <Link to="/admin/pending_deliveries" className="return">
          <Button>Retour</Button>
        </Link>
        {delivery && (
        <div className="form">
          <Form onSubmit={handleSubmit}>
            <Form.Field className="input-1">
              <label>Nom du client</label>
              <input
                type="text"
                name="customerName"
                defaultValue={delivery.customer.name}
                onChange={handleCustomerNameInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Adresse</label>
              <input
                type="text"
                name="customerAddress"
                defaultValue={delivery.customer.address}
                onChange={handleCustomerAddressInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Numéro de téléphone</label>
              <input
                type="tel"
                name="phone_number"
                defaultValue={delivery.customer.phoneNumber}
                onChange={handleCustomerPhoneNumberInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Type de marchandise</label>
              <input
                type="text"
                name="merchandise"
                defaultValue={delivery.merchandise}
                onChange={handleMerchandiseInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Volume</label>
              <input
                type="number"
                name="volume"
                defaultValue={delivery.volume}
                onChange={handleVolumeInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Commentaire de livraison</label>
              <input
                type="text"
                name="comment"
                defaultValue={delivery.comment}
                onChange={handleCommentInputChange}
              />
            </Form.Field>
            <Button className="button" type="submit">Modifier la livraison</Button>
          </Form>
        </div>
        )}
      </div>
    </div>
  );
};

// == Export component
export default UpdateDelivery;
