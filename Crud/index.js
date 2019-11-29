const express = require('express')
const { ApolloServer, gql } = require ('apollo-server-express')

const typeD = require('./typeDefs.graphql')
const schema = gql(`${typeD}`)


const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs: schema, resolvers})
const app = express()
server.applyMiddleware({ app })
var msg = ''
app.listen({ port: 4000 }, () => console.
	log(`O servidor está sendo executado em localhost:4000${server.graphqlPath}`))