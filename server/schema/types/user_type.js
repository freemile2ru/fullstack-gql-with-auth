const graphl = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphl;


const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        email: {
            type: GraphQLString
        },
        id: {
            type: GraphQLID
        }
    }

})

module.exports = UserType;