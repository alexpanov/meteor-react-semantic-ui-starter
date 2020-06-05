import SimpleSchema from 'simpl-schema';

// TODO replace when version 0.0.5 of 'fuww:created-at-updated-at' is released
// It currently depends on the old simple-schema and it causes unexpected errors
export const createdAtSchema = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      } if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      }

      // otherwise unset it
      this.unset();
    }
  }
});

function getCreatedAt() {
  return this.siblingField('createdAt').value;
}

export const updatedAtSchema = new SimpleSchema({
  updatedAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return getCreatedAt.call(this) || new Date();
      } if (this.isUpsert) {
        return {
          $set: new Date(),
          $setOnInsert: getCreatedAt.call(this) || new Date()
        };
      }

      return new Date();
    }
  }
});
