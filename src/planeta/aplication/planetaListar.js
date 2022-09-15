const { DynamoDB } = require('aws-sdk');
const dynamoDb = new DynamoDB.DocumentClient();


async function obtenerPlanetas (event) {
  const params = {
    TableName: process.env.PLANETA_DYNAMODB_TABLE
  }
  return dynamoDb.scan(params)
    .promise()
    .then(response =>{
      return {data:response.Items};
    })
    .catch(error =>{
      console.error(error);
      return {message: 'erro en dynamoDb'}
    })
  
}
module.exports = obtenerPlanetas;
