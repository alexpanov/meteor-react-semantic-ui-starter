import {VinNumbers} from '/imports/api/vinNumbers/collection';
import {addVin} from '/imports/api/vinNumbers/methods';

const isSeededAlready = () => VinNumbers.find().count() > 1;

const seedVinNumbers = () => {
  if (isSeededAlready()) {
    console.log('Server is seeded');
    return;
  }

  console.log('Running seed function');

  const vinInserts = ['Vin1', 'Vin2', 'Vin3'].map(value => addVin.callPromise({value}));
  Promise.all(vinInserts)
    .catch(err => console.error('Seeding the server failed', err))
    .then(() => console.log(`Successfully seeded the server with ${vinInserts.length} vin numbers`));
};

export default seedVinNumbers;
