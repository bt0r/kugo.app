import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './screens/home/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
