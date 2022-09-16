const { DynamoDB } = require('aws-sdk');
require('dotenv').config();
const dynamoDb = new DynamoDB.DocumentClient(
  {
    region: 'us-east-1',
    apiVersion: 'latest',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY
    }
  }
);


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
      return {message: 'error en dynamoDb'}
    })
  
}
module.exports = obtenerPlanetas;
