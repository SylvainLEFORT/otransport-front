//   Import
import { Route, Routes } from 'react-router-dom';

import './styles.scss';
import 'semantic-ui-css/semantic.min.css';

import ShippingDeliveries from '../ShippingDeliveries';
import PendingDeliveries from '../PendingDeliveries';
import DriversManagement from '../DriversManagement';
import Login from '../Login';
import Driver from '../Driver';
import DriverDelivery from '../DriveDelivery';
import Error from '../Error';
import CreateDelivery from '../CreateDelivery';
import UpdateDelivery from '../UpdateDelivery';
import CreateDriver from '../CreateDriver';
import UpdateDriver from '../UpdateDriver';
import History from '../History';
import DriverInfos from '../DriverInfos';
import DeliveryDetail from '../DeliveryDetail';
import HeaderLogged from '../Header';

// == Composant
const App = () => {
  const token = sessionStorage.getItem('jwtToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);
  const islogged = token;

  return (
    <div className="app">
      { islogged && <HeaderLogged /> }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/driver/delivery/:id" element={<DriverDelivery />} />
        <Route path="/admin/shipping_deliveries" element={<ShippingDeliveries />} />
        <Route path="/admin/pending_deliveries" element={<PendingDeliveries />} />
        <Route path="/admin/drivers_management" element={<DriversManagement />} />
        <Route path="/admin/create_delivery" element={<CreateDelivery />} />
        <Route path="/admin/update_delivery/:id" element={<UpdateDelivery />} />
        <Route path="/admin/create_driver" element={<CreateDriver />} />
        <Route path="/admin/update_driver/:id" element={<UpdateDriver />} />
        <Route path="/admin/history" element={<History />} />
        <Route path="/admin/driver_informations/:id" element={<DriverInfos />} />
        <Route path="/admin/delivery_detail/:id" element={<DeliveryDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
// == Export
export default App;
