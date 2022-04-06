import './driver.scss';
import Mediaquery from 'react-responsive';
import DriverList from './DriverList';

const Driver = () => (
  <div>
    <Mediaquery minWidth={601}>
      <div className="driver">
        <h1 className="titre">Livraisons attribuées</h1>
        <DriverList />
        <DriverList />
        <DriverList />
        <DriverList />
        <DriverList />
      </div>
    </Mediaquery>
    <Mediaquery maxWidth={600}>
      <div className="driver-phone">
        <h1 className="titre-phone">Livraisons attribuées</h1>
        <DriverList />
        <DriverList />
        <DriverList />
        <DriverList />
        <DriverList />
      </div>
    </Mediaquery>
  </div>
);

export default Driver;
