import {Todos} from '../collections';

Meteor.publish('Todos/publications/all', () => Todos.find({}));
