import {expect} from 'chai';
import validateVin from './validateVin';

describe('validateVin', () => {
  it('should validate standard VIN numbers', () => {
    expect(validateVin('5GZCZ43D13S812715')).to.equal(undefined);
  });
  it('should not validate invalid VIN numbers', () => {
    validateVin('5GZCZ43D13S81271').should.equal('Please enter a valid 17-digit VIN number');
  });
  it('should not validate `undefined`', () => {
    validateVin(undefined).should.equal('Please enter a valid 17-digit VIN number');
  });
});
