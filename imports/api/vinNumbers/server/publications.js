import {VinNumbers} from '../collection';

Meteor.publish('VinNumbers/publications/all', () => VinNumbers.find({}));
