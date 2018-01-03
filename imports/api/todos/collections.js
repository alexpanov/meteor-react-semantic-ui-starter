import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {createdAtUpdatedAtSchema} from 'meteor/fuww:created-at-updated-at';

export const Todos = new Mongo.Collection('todos');

export const TodoSchema = new SimpleSchema({
  name: {
    type: String,
  }
});

Todos.attachSchema(new SimpleSchema([TodoSchema, createdAtUpdatedAtSchema]));

Todos.helpers({
  hello() {
    return 'Hello';
  }
});
