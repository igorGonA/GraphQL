const Todo = [
  {
    _id: '1',
    title: 'Igor Albino',
    description: 'Teste',
    complete: true 
  }
]
//require('../db/models/todo');

const resolvers = {
  Query: {
    todos: async () => {
      const todos = await Todo.find();
      return todos;
    },
  },
  Mutation: {
    create: async (_, args) => {
      const todo = await new Todo({ ...args, complete: false }).save();
      return todo;
    },
    update: async (_, { _id, ...args }) => {
      const todo = await Todo.findOneAndUpdate({ _id }, { $set: args }, { new: true });
      return todo;
    },
    delete: async (_, args) => {
      await Todo.delete(args);
      return {
        _id: args._id,
      };
    },
  },
};

module.exports = resolvers;
