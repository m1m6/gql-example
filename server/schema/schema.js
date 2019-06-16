const graphql= require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:() => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields:() => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args){
                // code to get from db
                return _.find([
                        {
                            name: 's',
                            id: "0",
                            genre: 'mmm'
                        },
                        {
                            name: 's2',
                            id: "1",
                            genre: 'sss'
                        }
                    ]
                , {id: args.id})
            }
        },
        author: {
            type: AuthorType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args){
                return _.find([
                    {
                        name: 'mahmoud',
                        id: "0",
                        age: 22
                    },
                    {
                        name: 'salem',
                        id: "1",
                        age: 25
                    }
                ]
            , {id: args.id})
            }
        }
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery
})