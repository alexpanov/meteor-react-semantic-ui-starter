import faker from 'faker';
import {Factory} from 'meteor/dburles:factory';
import {Todos} from '/imports/api/todos/collections';
import '/imports/testSupport/setup';

Factory.define('Todo', Todos, {
  name: faker.lorem.sentence(),
});

// TODO write example tests
export default Factory;
