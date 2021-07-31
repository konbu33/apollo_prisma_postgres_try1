import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server'

const prisma = new PrismaClient()

const typeDefs = `
	type Todo {
		id: Int!
		title: String
	}

	type Query {
		todo: [Todo]
	}
`

const resolvers = {
	Query: {
		todo: async () => {
			const data = await prisma.todo.findMany()
			console.log('data: ', data)
			return data
		},
	},
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen( { port: 4000 } , () => {
	console.log(`server ready at http://localhost:4000${server.graphqlPath}`)
})


