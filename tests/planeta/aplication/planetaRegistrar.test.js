
jest.mock('uuid/v1');
const mockDynamoDbPut = jest.fn().mockImplementation(() => {
  return {
    promise() {
      return Promise.resolve({message: 'Registro exitoso'});
    }
  };
});
jest.mock('aws-sdk', () => {
  return {
    DynamoDB: { // just an object, not a function
      DocumentClient: jest.fn(() => ({
        put: mockDynamoDbPut
      }))
    }
  }});

const { DynamoDB } = require('aws-sdk');
const uuidv1 = require('uuid/v1');
const planetaRegistrar = require('../../../src/planeta/aplication/planetaRegistrar');


test('crear planeta logica', async ()=>{
  //DynamoDB.DocumentClient().put().mockReturnValue();
  const data = require('../../../src/planeta/model/crearPlanetaRequest2.json');
  
  uuidv1.mockReturnValue('1');
  const result = await planetaRegistrar(data);

  const resultExpectec = {message: 'Registro exitoso'};

  expect(result).toStrictEqual(resultExpectec);

})
