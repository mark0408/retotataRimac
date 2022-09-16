
const { crearPlaneta } = require('../src/handler')
const planetaRegistrar = jest.createMockFromModule('../src/planeta/aplication/planetaRegistrar.js');


function __planetaRegistrar(event){
    if(event.body){
        return require("../src/planeta/model/crearPlanetaResponse.json");
    }
    else{
        return {}
    }
    
}

test('prueba que handler crear planeta funciona',  (callback)=>{
    const data = require("../src/planeta/model/crearPlanetaRequest.json");
    const request = {body:data}
    const result =  crearPlaneta(request,null,callback);
    const expectResult = require("../src/planeta/model/crearPlanetaResponse.json");

    expect(result).resolves.toBe(expectResult);
})


