import { Header, Segment, Image } from 'semantic-ui-react';

import Patrick from 'src/assets/docs/patrick.png';
import Otransport from 'src/assets/docs/roue-O-transport.svg';

import NavBar from './NavBar';

const HeaderLogged = () => (
  <div>
    <Segment clearing>
      <Header as="h2" floated="right">
        <Image circular src={Patrick} /> Patrick
      </Header>
      <Header as="h2" floated="left">
        <Image src={Otransport} />' Transport
      </Header>
    </Segment>
    <NavBar />
  </div>
);

export default HeaderLogged;
