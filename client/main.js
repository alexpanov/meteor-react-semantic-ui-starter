import '/imports/startup/client';
import {Tracker} from 'meteor/tracker';
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'normalize.css';

Meteor.startup(() => {
  Tracker.autorun((computations) => {
    render(
      <App />
      ,
      document.getElementById('root')
    );
    computations.stop();
  });
});
