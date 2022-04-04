//   Import
import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';

import HeaderLogged from '../Header';
import Login from '../Login';
import Error from '../Error';

// == Composant
const App = () => (
  <div className="app">
    <HeaderLogged />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>
);

// == Export
export default App;
