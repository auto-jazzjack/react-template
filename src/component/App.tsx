import logo from './logo.svg';
import './App.css';
import store, {history} from '../store/store';

import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BoardList } from './board/list';
import { ConnectedRouter } from 'connected-react-router';
import MainLayout from './layout/main';



function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
       
      <Switch>
        <Route component={BoardList} {...BoardList} />
      </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
