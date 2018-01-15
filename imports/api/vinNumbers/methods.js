import {VinNumberFields, VinNumbers} from './collection';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {CallPromiseMixin} from 'meteor/didericis:callpromise-mixin';
import {validateId} from '/imports/validation/methods';

export const addVin = new ValidatedMethod({
  name: 'VinNumbers.methods.add',
  validate: VinNumberFields.validator(),
  mixins: [CallPromiseMixin],
  run(vin) {
    return VinNumbers.insert(vin);
  }
});

export const removeVin = new ValidatedMethod({
  name: 'VinNumbers.methods.remove',
  validate: validateId,
  mixins: [CallPromiseMixin],
  run({_id}) {
    return VinNumbers.remove(_id);
  }
});
