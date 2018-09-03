const graphql = require('graphql');
const UserType = require('./types/user_type');
const { GraphQLObjectType, GraphQLString } = graphql;
const AuthService = require('../services/auth')


const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, {email, password}, context){
                return AuthService.signup(email, password, context)

            }
        },
        logout: {
            type: UserType,
            args: { },
            resolve(parentValue, args, context){
                const { user } = context;
                context.logout();
                return user
                

            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, {email, password}, context){
                return AuthService.login(email, password, context)

            }
        }
    }
})


module.exports = mutation;