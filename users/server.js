const express=require('express');
//compatibility layer
const expressGraphQL=require('express-graphql');

const schema = require('./schema/schema');
// const graphql=require(graphql);
// const loadash=require(loadsh);

const app=express();


app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
console.log('Listening');
});