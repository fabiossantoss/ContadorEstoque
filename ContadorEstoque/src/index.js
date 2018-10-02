import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import ResultBottom from 'pages/resultBottom';


import Routes from './store/routes';
import store from './store';


const Main = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <ResultBottom />
    </Fragment>
  </Provider>
);

export default Main;
