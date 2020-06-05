import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import About from './pages/About';
import VinNumbers from './pages/VinNumbers';
import {Container} from '/client/components/layout';
import {about} from '/imports/paths';
import Menu from '/client/components/Menu';
import Footer from '/client/components/Footer';
import reducer from './state';
import 'semantic-ui-css/semantic.min.css';
import './app.styl';

const links = [
  {href: '/', label: 'Home'},
  {href: about, label: 'About'},
];

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Container id="app-container">
        <Menu links={links} />
        <div id="main-screen">
          <Route exact path="/" component={VinNumbers} />
          <Route exact path={about} component={About} />
        </div>
        <Footer />
      </Container>
    </BrowserRouter>
  </Provider>
);

export default App;
