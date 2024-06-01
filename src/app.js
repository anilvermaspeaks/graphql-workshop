const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
 const schema = require('./graphql/schema')


const getEmployee = function (args) {
   const empId = args.id;
   const employee = {}
   employee.id = empId;
   employee.name= "Siva";
   employee.age = 32;


   const address = {}
   address.street = "Test Street"
   address.pincode= 560605
   address.city = "Bangalore"
   employee.address = address;
return employee;
}
const getEmployees = function (args) {
return [];
}




const root = {
   employee: getEmployee,
   employees: getEmployees
};


const app = express();
app.use('/graphql', createHandler({
 schema: schema,
 rootValue: root,
 graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');



