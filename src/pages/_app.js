import 'styles/index.scss';
import Store from 'context';
import store from 'config/redux';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }) => (
  <div className="app">
    <Provider store={store}>
      <Store>
        <Component {...pageProps} />
      </Store>
    </Provider>
  </div>
);

export default App;
