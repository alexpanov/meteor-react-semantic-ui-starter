import './migrations';
import './registerApi';
import seedVinNumbers from './seedVinNumbers';

Meteor.startup(() => {
  seedVinNumbers();
});
