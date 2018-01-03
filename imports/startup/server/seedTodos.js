import {Todos} from '/imports/api/todos/collections';

const isSeededAlready = () => Todos.find().count() > 10;

const seedProductVariants = () => {
  if (isSeededAlready()) {
    console.log('Server is seeded');
    return;
  }

  console.log('Running seed function');
};

export default seedProductVariants;
