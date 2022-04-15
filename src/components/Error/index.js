import './error.scss';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="e404">404</h1>
      <p className="eText">La page que vous tentez de rejoindre n'existe pas</p>
      <a className="eRedirect" onClick={() => navigate(-1)}>Cliquez ici pour revenir à la page précédente</a>
    </div>
  );
};

export default Error;
