import SimpleSchema from 'simpl-schema';

export const validateId = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  }
}).validator();
