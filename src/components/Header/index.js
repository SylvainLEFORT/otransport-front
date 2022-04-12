import { Header, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Mediaquery from 'react-responsive';
import Patrick from 'src/assets/docs/patrick.png';
import Otransport from 'src/assets/docs/roue-O-transport.svg';
import './header.scss';

const HeaderLogged = () => (
  <div>
    <Mediaquery minWidth={601}>
      <div className="header-desktop">
        <Segment clearing>
          <Header as="h2" floated="right">
            <Image circular src={Patrick} /> Patrick
            <div
              className="disconnect"
              style={{
                fontSize: 'small',
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: -20,
              }}
            ><Link to="/">Disconnect</Link>
            </div>
          </Header>
          <Header as="h2" floated="left">
            <Image src={Otransport} /><Link to="/admin/shipping_deliveries">' Transport</Link>
          </Header>
        </Segment>
      </div>
    </Mediaquery>
    <Mediaquery maxWidth={600}>
      <div className="header-phone">
        <Segment clearing>
          <Header as="h2" floated="right">
            <Image circular src={Patrick} /> Patoche
            <div
              className="disconnect"
              style={{
                fontSize: 'small',
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: -20,
              }}
            ><Link to="/">Disconnect</Link>
            </div>
          </Header>
        </Segment>
      </div>
    </Mediaquery>
  </div>
);

export default HeaderLogged;
