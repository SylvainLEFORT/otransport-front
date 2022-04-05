//   Import
import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';

import HeaderLogged from '../Header';
import CurrentDeliveries from '../CurrentDeliveries';
import DeliveriesManagement from '../DeliveriesManagement';
import DriversManagement from '../DriversManagement';
import Login from '../Login';
import Driver from '../Driver';
import DriverDelivery from '../DriveDelivery';
import Error from '../Error';
import CreateDelivery from '../CreateDelivery';

// == Composant
const App = () => (
  <div className="app">
    <HeaderLogged />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/driver" element={<Driver />} />
      <Route path="/driver/delivery/:id" element={<DriverDelivery />} />
      <Route path="/admin/current_deliveries" element={<CurrentDeliveries />} />
      <Route path="/admin/deliveries_management" element={<DeliveriesManagement />} />
      <Route path="/admin/drivers_management" element={<DriversManagement />} />
      <Route path="/admin/create_delivery" element={<CreateDelivery />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>
);

// == Export
export default App;
