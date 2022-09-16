const { DynamoDB } = require('aws-sdk');
const modelo = require('./../model/planeta');
const uuidv1 = require('uuid/v1');
const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

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

  let response ={};

  // Aqui cambiar idInicial
  for (let idInicial = 1; idInicial <= 10; idInicial++) {
    let planeta = await obtenerPlanetasApiStarWars(idInicial);
    
    let planetaAtributoOrdenado = Object.entries(planeta).sort();
    planetaAtributoOrdenado.push(["id",uuidv1()]);
    let periodoRotacion = planetaAtributoOrdenado.sort().splice(11,1)
    planetaAtributoOrdenado.splice(9,0,periodoRotacion[0])
    let nombreDeCampos = Object.keys(modelo).sort();
    let planetaAtribustoEspañol = [[]];
    
    for (let i=0; i <= 14; i++) {
        planetaAtribustoEspañol.push([nombreDeCampos[i],planetaAtributoOrdenado[i][1]])
        
    }
    planetaAtribustoEspañol.shift();
    
    let planetaEspañol = Object.fromEntries(planetaAtribustoEspañol);

    const params = {
        TableName: process.env.PLANETA_DYNAMODB_TABLE,
        Item: planetaEspañol
      }
    response = dynamoDb.put(params)
    .promise()
    .then(() =>{
      return {message: 'Registro exitoso'};
    })
    .catch(error =>{
      console.error(error);
      return {message: 'error en dynamoDb'}
    }) 
  }

  return response;

}

async function obtenerPlanetasApiStarWars(idInicial){
    const data = await fetch(`https://swapi.py4e.com/api/planets/${idInicial}/`)
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        return myJson
      });
    return data;
}
module.exports = obtenerPlanetas; 