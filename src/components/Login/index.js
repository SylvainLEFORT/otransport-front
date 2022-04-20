/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import style
import './login.scss';

// == Import dependencies
import { Link } from 'react-router-dom';
import { Image, Form } from 'semantic-ui-react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

// == Import required assets
import logo from 'src/assets/docs/O-transport.svg';

// == Import required context and contants
import AuthContext from '../../context/AuthProvider';
import ROLES from '../../constants/roles';

// == URL API for identification
const LOGIN_URL = 'http://baltidus-server.eddi.cloud/apotheose/projet-03-o-transport-back/public/api/login_check';

//  == Component
const Login = () => {
  const { setAuth, setToken, setFirstname, setRoles } = useContext(AuthContext);

  const [username, setUser] = useState('');
  const [password, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      const accessToken = response?.data?.token;
      const roles = response?.data?.user.roles;
      const driverID = response?.data?.user.id;
      const driverFirstname = response?.data?.user.firstname;
      setAuth({
        username,
        password,
        roles,
        accessToken,
      });
      setUser('');
      setPwd('');
      setSuccess(true);
      sessionStorage.setItem('jwtToken', accessToken);
      setToken(accessToken);
      sessionStorage.setItem('id', driverID);
      sessionStorage.setItem('firstname', driverFirstname);
      setFirstname(driverFirstname);
      sessionStorage.setItem('roles', roles);
      setRoles(roles);

      if (roles.find((role) => role === ROLES.ADMIN)) {
        navigate('./admin/shipping_deliveries');
      }
      else {
        navigate('./driver');
      }
    }
    catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      }
      else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      }
      else if (err.response?.status === 401) {
        setErrMsg('Email ou mot de passe incorrect');
      }
      else {
        setErrMsg('Login Failed');
      }
    }
  };

  return (
    <div className="login">
      <Image className="logo" src={logo} size="medium" />
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <p>Bienvenue</p>
          <span className="error"> { errMsg } </span>
          <Form.Field>
            <label>E-mail</label>
            <input
              placeholder="Votre E-mail"
              type="email"
              onChange={(e) => setUser(e.target.value)}
              value={username}
            />
          </Form.Field>
          <Form.Field>
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="Votre mot de passe"
              onChange={(e) => setPwd(e.target.value)}
              value={password}
            />
          </Form.Field>
          <button type="submit" className="connect">Se connecter</button>
        </Form>
      </div>
      <Link className="createdby" to="/developpers">Created by Team O'transport <br /> O'clock students </Link>
    </div>
  );
};

// == Export component
export default Login;
