import {Todos, TodoSchema} from './collections';
import {ValidatedMethod} from 'meteor/mdg:validated-method';

export const addTodo = new ValidatedMethod({
  name: 'Todos.methods.add',
  validate: TodoSchema.validator(),
  run(todo) {
    return Todos.insert(todo);
  }
});
