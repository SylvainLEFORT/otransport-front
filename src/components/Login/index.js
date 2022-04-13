import './login.scss';
import { Image, Form } from 'semantic-ui-react';
import { useState, useEffect, useContext } from 'react';
import logo from 'src/assets/docs/O-transport.svg';
import axios from 'axios';
import AuthContext from '../../context/AuthProvider';

const LOGIN_URL = 'http://localhost:8000/api/login_check';

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const [username, setUser] = useState('');
  const [password, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      const accessToken = response?.data?.accessToken;
      console.log(accessToken);
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
    }
    catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      }
      else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      }
      else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
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
          <Form.Field>
            <label>E-mail</label>
            <input
              placeholder="veuillez insérer votre E-mail"
              type="email"
              onChange={(e) => setUser(e.target.value)}
              value={username}
            />
          </Form.Field>
          <Form.Field>
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="veuillez écrire votre mot de passe"
              onChange={(e) => setPwd(e.target.value)}
              value={password}
            />
          </Form.Field>
          <button type="submit">Se connecter</button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
