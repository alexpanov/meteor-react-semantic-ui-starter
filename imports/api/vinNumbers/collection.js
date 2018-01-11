import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {createdAtUpdatedAtSchema} from 'meteor/fuww:created-at-updated-at';
import moment from 'moment';

export const VinNumbers = new Mongo.Collection('vinNumbers');

export const VinNumberSchema = new SimpleSchema({
  value: {
    type: String,
  }
});

VinNumbers.attachSchema(new SimpleSchema([VinNumberSchema, createdAtUpdatedAtSchema]));

VinNumbers.helpers({
  friendlyCreationDate() {
    // @todo #1:10min Display a user friendly creation date
    return moment(this.createdAt).format();
  }
});
