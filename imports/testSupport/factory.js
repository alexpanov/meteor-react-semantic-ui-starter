import faker from 'faker';
import {Factory} from 'meteor/dburles:factory';
import {VinNumbers} from '/imports/api/vinNumbers/collection';
import '/imports/testSupport/setup';

Factory.define('VinNumber', VinNumbers, {
  name: faker.lorem.sentence(),
});

// @todo #1:30min Write some tests
export default Factory;
