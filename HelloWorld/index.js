const express = require('express')
const { ApolloServer, gql } = require ('apollo-server-express')

const schema = gql(' type Query { olaMundo: String!  }')

const resolvers = {
	Query: {
		olaMundo: () => 'Olá, Galerinha de sistemas'
	}
}

const server = new ApolloServer({ typeDefs: schema, resolvers})
const app = express()
server.applyMiddleware({ app })
var msg = ''
app.listen({ port: 4000 }, () => console.
	log(msg.concat('O servidor está sendo executado em localhost:4000', server.graphqlPath)))