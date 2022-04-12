import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/components/App';
import store from 'src/store';
import { AuthProvider } from './context/AuthProvider';

const rootReactElement = (
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
