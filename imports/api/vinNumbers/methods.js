import {VinNumbers, VinNumberSchema} from './collection';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {CallPromiseMixin} from 'meteor/didericis:callpromise-mixin';

export const addVin = new ValidatedMethod({
  name: 'VinNumbers.methods.add',
  validate: VinNumberSchema.validator(),
  mixins: [CallPromiseMixin],
  run(vinNumber) {
    return VinNumbers.insert(vinNumber);
  }
});
