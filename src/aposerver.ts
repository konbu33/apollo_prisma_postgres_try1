import { ApolloServer } from 'apollo-server'
import todoQuery from './todoQuery'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema(`${__dirname}/schema.gql`)

const resolvers = {
	Query: {
		todo: todoQuery, 
		todo2: todoQuery, 
		id: () => 99,
		getTitle: () => 'query2 string',
	},
}

const server = new ApolloServer( { typeDefs, resolvers } )

server.listen( { port: 4000 }, () => {
	console.log( 'server start : ')
})

