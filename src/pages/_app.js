import 'styles/index.scss';
import { createStore } from 'redux';
import reducers from 'redux/reducers';
import { Provider } from 'react-redux'

const store = createStore(reducers)

const App = ({ Component, pageProps }) => (
  <div className="app">
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </div>
);

export default App;
