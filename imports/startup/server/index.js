import './migrations';
import './registerApi';
import seedTodos from './seedTodos';

Meteor.startup(() => {
  seedTodos();
});
