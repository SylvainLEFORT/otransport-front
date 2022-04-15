import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Image } from 'semantic-ui-react';
import Mediaquery from 'react-responsive';
import Patrick from 'src/assets/docs/patrick.png';
import Otransport from 'src/assets/docs/roue-O-transport.svg';
import AuthContext from '../../context/AuthProvider';
import './header.scss';

const HeaderLogged = () => {
  const { setToken } = useContext(AuthContext);
  const { setFirstname } = useContext(AuthContext);
  const firstname = sessionStorage.getItem('firstname');
  const handleSubmit = () => {
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('firstname');
    setToken(null);
    setFirstname('');
  };

  return (
    <div>
      <Mediaquery minWidth={601}>
        <div className="header-desktop">
          <Segment clearing>
            <Header as="h2" floated="right">
              <p>{firstname}</p>
              <div
                className="disconnect"
                style={{
                  fontSize: 'small',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: -20,
                }}
              ><Link id="titre" to="/" onClick={handleSubmit}>Déconnexion</Link>
              </div>
            </Header>
            <Header as="h2" floated="left">
              <Image src={Otransport} />' Transport
            </Header>
          </Segment>
        </div>
      </Mediaquery>
      <Mediaquery maxWidth={600}>
        <div className="header-phone">
          <Segment clearing>
            <Header as="h2" floated="right">
              <p> {firstname} </p>
              <div
                className="disconnect"
                style={{
                  fontSize: 'small',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: -20,
                }}
              ><Link id="titre" to="/" onClick={handleSubmit}>Déconnexion</Link>
              </div>
            </Header>
          </Segment>
        </div>
      </Mediaquery>
    </div>
  );
};
export default HeaderLogged;
