import SimpleSchema from 'simpl-schema';
import chai from 'chai';
import {createFormSchemaValidator} from './form';

chai.should();

describe('form validation', () => {
  const schema = new SimpleSchema({
    name: {type: String}
  });
  const validator = createFormSchemaValidator(schema);

  it('should use schema validator', () => {
    const result = validator({});
    const expectedErrors = {name: 'Name is required'};
    result.should.deep.equal(expectedErrors);
  });

  it('should return an empty object when no errors', () => {
    validator({name: 'asd'}).should.deep.equal({});
  });

  it('should omit _id field', () => {
    const schemaWithId = new SimpleSchema({
      name: {type: String},
      _id: {type: String},
    });

    createFormSchemaValidator(schemaWithId)({name: 'asd'}).should.deep.equal({});
  });
});
