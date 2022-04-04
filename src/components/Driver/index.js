import './driver.scss';

import DriverList from './DriverList';

const Driver = () => (
  <div className="driver">
    <h1 className="titre">Livraisons attribuées</h1>
    <DriverList />
    <DriverList />
    <DriverList />
    <DriverList />
    <DriverList />
  </div>
);

export default Driver;
