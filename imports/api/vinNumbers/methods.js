import {VinNumbers, VinNumberFields} from './collection';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {CallPromiseMixin} from 'meteor/didericis:callpromise-mixin';

export const addVin = new ValidatedMethod({
  name: 'VinNumbers.methods.add',
  validate: VinNumberFields.validator(),
  mixins: [CallPromiseMixin],
  run(vin) {
    return VinNumbers.insert(vin);
  }
});
