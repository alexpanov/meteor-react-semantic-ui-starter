import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {resetDatabase} from 'meteor/xolvio:cleaner';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

chai.use(chaiAsPromised);

chai.should();
chai.config.truncateThreshold = 0;

Meteor.methods({
  'test.resetDatabase': () => resetDatabase(),
});
