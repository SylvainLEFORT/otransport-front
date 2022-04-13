import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';

const AffectDriver = () => {
  const [drivers, setDrivers] = useState();
  const [delivery, setDelivery] = useState();
  const { id } = useParams();

  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleDriverIdChange = (e) => {
    e.persist();
    setDelivery(() => ({
      ...delivery.driver,
      id: e.target.value,
    }));
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/admin/drivers', config)
      .then((res) => {
        const driver = res.data;
        setDrivers(driver);
      });
  }, []);

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
    axios.put(`http://localhost:8000/api/admin/deliveries/${id}/affect`, { drivers, delivery }, config)
      .then((response) => setDrivers(response.data.updatedAt));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {delivery && (
      <select defaultValue={delivery.driver.firstname} onChange={handleDriverIdChange}>
        {drivers && drivers.map((item) => (
          <option key={item.id}>
            {item.firstname} {item.lastname}
          </option>
        ))}
      </select>
      )}
      <Button type="submit">Modifier le chauffeur</Button>
    </Form>
  );
};

export default AffectDriver;
