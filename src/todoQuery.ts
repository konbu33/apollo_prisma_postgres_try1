import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
	const todoes = await prisma.todo.findMany()
	// console.log(' todoes: ', todoes)
	return todoes
}

main()
	.catch( e => { throw e })
	.finally( async () => { await prisma.$disconnect() })

export default main

