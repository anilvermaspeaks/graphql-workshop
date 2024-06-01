const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { buildSchema } = require('graphql');

// Define a schema
const schema = buildSchema(`
  type Query {
    hello: String,
    user(id: Int!, name: String): User
  }

  type User{
    id: Int
    age: Int
    name: String
    address: Address
}
type Address{
    street: String!
    pincode: Int
    state: String
}  

`);


// handlers
const getUser = function (args) {
    var userId = args.id;
    var user = {}
    user.id = userId;
    user.name= args.name;
    user.age = 32;
   
    var address = {}
    address.street ="MG Road";
    address.pincode=500001;
    address.state="KA";
    user.address = address;
    return user;
}



// Define a resolver
const root = {
  hello: () => {
    return 'Hello, world!';
  },
  user: getUser
};

// Create an Express app
const app = express();

// Define the GraphQL endpoint
app.use('/graphql', createHandler({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});