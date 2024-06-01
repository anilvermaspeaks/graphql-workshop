const { buildSchema } = require('graphql');
// Construct a schema, using GraphQL schema language
 const schema = buildSchema(`
 type Query {
   employee(id: Int): Employee
   employees: [Employee]
 }


 type Employee{
   id: ID
   name: String!
   designation: String!
   age: Int
   address: Address
 }


 type Address{
     street: String
     pincode: Int
     city: String
 }
`);


module.exports = schema;
