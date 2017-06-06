import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history = createHistory()

render(
  <Router history={history} >
    <App />
  </Router>,
  document.getElementById('root')
)

registerServiceWorker();
