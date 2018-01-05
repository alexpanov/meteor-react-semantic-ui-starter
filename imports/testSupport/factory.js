import faker from 'faker';
import {Factory} from 'meteor/dburles:factory';
import {VinNumbers} from '/imports/api/vinNumbers/collection';
import '/imports/testSupport/setup';

Factory.define('VinNumber', VinNumbers, {
  name: faker.lorem.sentence(),
});

// TODO write example tests
export default Factory;
