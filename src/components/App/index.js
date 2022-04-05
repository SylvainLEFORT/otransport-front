//   Import
import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';

import HeaderLogged from '../Header';
import AdminHomepage from '../AdminHomepage';
import DeliveriesManagement from '../DeliveriesManagement';
import Login from '../Login';
import Driver from '../Driver';
import DriverDelivery from '../DriveDelivery';
import Error from '../Error';
import CreateDeliveries from '../CreateDeliveries';

// == Composant
const App = () => (
  <div className="app">
    <HeaderLogged />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/driver" element={<Driver />} />
      <Route path="/driver/delivery/:id" element={<DriverDelivery />} />
      <Route path="/admin" element={<AdminHomepage />} />
      <Route path="/admin/deliveries_management" element={<DeliveriesManagement />} />
      <Route path="/admin/create_deliveries" element={<CreateDeliveries />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>
);

// == Export
export default App;
