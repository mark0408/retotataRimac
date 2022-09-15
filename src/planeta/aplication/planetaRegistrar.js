const { DynamoDB } = require('aws-sdk');
const uuidv1 = require('uuid/v1');

const dynamoDb = new DynamoDB.DocumentClient()


  async function planetaRegistrar(event) {
  const data = JSON.parse(event.body)

  let planeta = {
    id: uuidv1(),
    url: data.url,
    editado: data.editado,
    creado: data.creado,
    filmes: data.filmes,
    residentes: data.residentes,
    poblacion: data.poblacion,
    superficie_agua: data.superficie_agua,
    terreno: data.terreno,
    gravedad: data.gravedad,
    clima: data.clima,
    diametro: data.diametro,
    periodo_orbital: data.periodo_orbital,
    periodo_rotacion: data.periodo_rotacion,
    nombre: data.nombre,
  }
 
  const params = {
    TableName: process.env.PLANETA_DYNAMODB_TABLE,
    Item: planeta
  }

  return dynamoDb.put(params)
    .promise()
    .then(() =>{
      return {message: 'Registro exitoso'};
    })
    .catch(error =>{
      return {message: 'erro en dynamoDb'}
    })
}

module.exports = planetaRegistrar;
