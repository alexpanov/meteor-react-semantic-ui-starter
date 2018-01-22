import {VinNumbers} from '/imports/api/vinNumbers/collection';
import {addVin} from '/imports/api/vinNumbers/methods';

const isSeededAlready = () => VinNumbers.find().count() > 1;

const dummyVins = [
  {value: '5GZCZ43D13S812715', notes: 'First'},
  {value: 'SGZCZ43D13S812715', notes: 'Second'},
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
