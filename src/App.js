import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RootStack from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);
