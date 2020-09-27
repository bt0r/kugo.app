import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './screens/home/App';
import * as serviceWorker from './serviceWorker';
import {ParallaxProvider} from "react-scroll-parallax/cjs";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
        <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
