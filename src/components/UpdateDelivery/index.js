/* eslint-disable jsx-a11y/label-has-associated-control */
import './updatedelivery.scss';

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

import NavBar from '../NavBar';

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
      name: e.target.value,
    }));
  };

  const handleCustomerAddressInputChange = (e) => {
    e.persist();
    setDelivery(() => ({
      ...delivery.customer,
      address: e.target.value,
    }));
  };

  const handleCustomerPhoneNumberInputChange = (e) => {
    e.persist();
    setDelivery(() => ({
      ...delivery.customer,
      phoneNumber: e.target.value,
    }));
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/admin/deliveries/${id}`)
      .then((res) => {
        const resultDelivery = res.data;
        console.log(resultDelivery);
        setDelivery(resultDelivery);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8000/api/admin/deliveries/${id}`, delivery)
      .then((response) => setDelivery(response.data.updatedAt));
  };

  return (
    <div>
      <NavBar />

      <div className="create-driver">

        <h1 className="titre">Modifier une livraison</h1>

        <div className="trait" />

        <Link to="/admin/drivers_management" className="return">
          <Button>Retour</Button>
        </Link>
        {delivery && (
        <div className="form">
          <Form onSubmit={handleSubmit}>
            <Form.Field className="input-1">
              <label>Marchandise</label>
              <input
                type="text"
                name="merchandise"
                defaultValue={delivery.merchandise}
                onChange={handleMerchandiseInputChange}
              />
            </Form.Field>
            <Form.Field className="input-1">
              <label>Quantité</label>
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
            <Form.Field className="input-1">
              <label>Client</label>
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
            <Button className="button" type="submit">Modifier la livraison</Button>
          </Form>
        </div>
        )}
      </div>
    </div>
  );
};

export default UpdateDelivery;
