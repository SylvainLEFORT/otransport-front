import './createdelivery.scss';
import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import NavBar from '../NavBar';

const CreateDelivery = () => {
  const [delivery, setDelivery] = useState({
    merchandise: '',
    volume: null,
    comment: '',
  });

  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    phoneNumber: '',
  });

  const handleDeliveryMerchendiseChange = (e) => {
    e.persist();
    setDelivery((delivery) => ({
      ...delivery,
      merchandise: e.target.value,
    }));
  };

  const handleDeliveryVolumeChange = (e) => {
    e.persist();
    setDelivery((delivery) => ({
      ...delivery,
      volume: e.target.value,
    }));
  };

  const handleDeliveryCommentChange = (e) => {
    e.persist();
    setDelivery((delivery) => ({
      ...delivery,
      comment: e.target.value,
    }));
  };

  const handleCustomerNameChange = (e) => {
    e.persist();
    setCustomer((customer) => ({
      ...customer,
      name: e.target.value,
    }));
  };

  const handleCustomerAddressChange = (e) => {
    e.persist();
    setCustomer((customer) => ({
      ...customer,
      address: e.target.value,
    }));
  };

  const handleCustomerPhoneNumberChange = (e) => {
    e.persist();
    setCustomer((customer) => ({
      ...customer,
      phoneNumber: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/admin/deliveries/create', { delivery, customer })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="createdeliveries">
        <h1>Création d'une livraison</h1>
        <div className="trait" />
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Field>
            <label>Nom du client</label>
            <input
              placeholder="Veuillez renseigner le nom du client"
              type="text"
              name="customerName"
              value={customer.name}
              onChange={handleCustomerNameChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Adresse</label>
            <input
              placeholder="Veuillez renseigner l'adresse de livraison"
              type="text"
              name="customerAddress"
              value={customer.address}
              onChange={handleCustomerAddressChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Numéro de téléphone</label>
            <input
              placeholder="Veuillez renseigner le numéro de téléphone"
              type="text"
              name="customerPhoneNumber"
              value={customer.phoneNumber}
              onChange={handleCustomerPhoneNumberChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Type de marchandise</label>
            <input
              placeholder="Veuillez renseigner le type de marchandise"
              type="text"
              name="deliveryMerchandise"
              value={delivery.merchandise}
              onChange={handleDeliveryMerchendiseChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Volume</label>
            <input
              placeholder="Veuillez renseigner la quantité à livrer"
              type="undefined"
              name="deliveryVolume"
              value={delivery.volume}
              onChange={handleDeliveryVolumeChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Commentaire</label>
            <input
              placeholder="Tapez votre message ici"
              type="text"
              name="deliveryComment"
              value={delivery.comment}
              onChange={handleDeliveryCommentChange}
            />
          </Form.Field>
          <Button className="button" type="submit">Créer la livraison</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateDelivery;
