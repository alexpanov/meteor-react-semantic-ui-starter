import {VinNumbers} from '/imports/api/vinNumbers/collection';
import {addVin} from '/imports/api/vinNumbers/methods';

const isSeededAlready = () => VinNumbers.find().count() > 1;

const dummyVins = [
  {value: 'Vin1', notes: 'Note1'},
  {value: 'Vin2', notes: 'Note2'},
  {value: 'Vin3', notes: 'Note3'},
];

const seedVinNumbers = () => {
  if (isSeededAlready()) {
    console.log('Server is seeded');
    return;
  }

  console.log('Running seed function');

  const vinInserts = dummyVins.map(vin => addVin.callPromise(vin));
  Promise.all(vinInserts)
    .catch(err => console.error('Seeding the server failed', err))
    .then(() => console.log(`Successfully seeded the server with ${vinInserts.length} vin numbers`));
};

export default seedVinNumbers;
