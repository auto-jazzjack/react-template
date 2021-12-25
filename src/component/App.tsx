import logo from './logo.svg';
import './App.css';
import store, {history} from '../store/store';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BoardList } from './board/list';
import { ConnectedRouter } from 'connected-react-router';



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
