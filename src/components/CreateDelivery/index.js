import './createdelivery.scss';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import NavBar from '../NavBar';

const CreateDelivery = () => {
  const [delivery, setDelivery] = useState({
    customerName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleCustomerNameInputChange = (e) => {
    e.persist();
    setDelivery((delivery) => ({
      ...delivery,
      firstName: e.target.value,
    }));
  };

  const handleLastNameInputChange = (e) => {
    e.persist();
    setDelivery((delivery) => ({
      ...delivery,
      lastName: e.target.value,
    }));
  };

  const handleEmailInputChange = (e) => {
    e.persist();
    setDelivery((delivery) => ({
      ...delivery,
      email: e.target.value,
    }));
  };

  const handlePasswordInputChange = (e) => {
    e.persist();
    setDelivery((delivery) => ({
      ...delivery,
      password: e.target.value,
    }));
  };

  const handlePhoneNumberInputChange = (e) => {
    e.persist();
    setDelivery((delivery) => ({
      ...delivery,
      phoneNumber: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/drivers', delivery)
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
        <Form className="form">
          <Form.Field>
            <label>Nom client</label>
            <input
              placeholder="Veillez renseigné le nom du client"
              type="text"
              name="customer name"
              value={delivery.customer.name}
              onChange={handleCustomerNameInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Adresse</label>
            <input placeholder="Veillez renseigné l'adresse de livraison" />
          </Form.Field>
          <Form.Field>
            <label>Type de produit</label>
            <input placeholder="Veillez renseigné le type de produit à livré" />
          </Form.Field>
          <Form.Field>
            <label>Quantité</label>
            <input placeholder="Veillez renseigné la quantité à livré" />
          </Form.Field>
          <Form.Field>
            <label>Numéro de téléphone</label>
            <input placeholder="Veillez renseigné la quantité à livré" />
          </Form.Field>
          <Form.Field>
            <label>Commentaire</label>
            <input placeholder="Veillez renseigné la quantité à livré" />
          </Form.Field>
          <Button className="button" type="submit">Créer la livraison</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateDelivery;
