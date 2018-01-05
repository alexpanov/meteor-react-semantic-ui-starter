import React from 'react';
import Home from './pages/Home';
import Todos from './pages/Todos';
import {Container} from '/client/components/layout';
import {BrowserRouter, Route} from 'react-router-dom';
import {todos} from '/imports/paths';
import Menu from '/client/components/Menu';
import {createStore} from 'redux';
import reducer from './state';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

const links = [
  {href: '/', label: 'Home'},
  {href: todos, label: 'Todos'},
];

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Container id="app-container">
        <Menu links={links} />
        <div id="main-screen">
          <Route exact path="/" component={Home} />
          <Route exact path={todos} component={Todos} />
        </div>
      </Container>
    </BrowserRouter>
  </Provider>
);

export default App;
