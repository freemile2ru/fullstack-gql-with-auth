const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {},
      resolve(parentValue, args, context){
        const { user } = context;
        return user
      }
    }

  }
});

module.exports = RootQueryType;
