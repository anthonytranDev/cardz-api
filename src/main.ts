const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
}

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
const port = 4000

server.applyMiddleware({ app })

app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
