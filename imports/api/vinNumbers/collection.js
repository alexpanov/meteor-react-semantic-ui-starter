import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import {createdAtSchema, updatedAtSchema} from '/imports/collections/schemas';
import moment from 'moment';

export const VinNumbers = new Mongo.Collection('vinNumbers');

export const VinNumberFields = new SimpleSchema({
  value: {
    type: String,
  },
  notes: {
    type: String,
    optional: true
  }
});

const VinNumberSchema = new SimpleSchema();
VinNumberSchema.extend(VinNumberFields);
VinNumberSchema.extend(createdAtSchema);
VinNumberSchema.extend(updatedAtSchema);

VinNumbers.attachSchema(VinNumberSchema);

VinNumbers.helpers({
  friendlyCreationDate() {
    return `Created ${moment(this.createdAt).fromNow()}`;
  }
});
