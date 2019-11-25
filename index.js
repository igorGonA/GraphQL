const { graphql, buildSchema } = require ('graphql')

const schema = buildSchema(
	type Query {
		olaMundo: String!
	})

const resolver = {
	olaMundo: () => 'Olá, Galerinha de sistemas'
}

graphql(schema, '{olaMundo}', resolver).
	then(resposta => console.log(resposta))
