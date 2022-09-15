'use strict';

const planetaListar = require('./planeta/aplication/planetaListar');
const planetaRegistrar =  require('./planeta/aplication/planetaRegistrar');
const llenarBaseDeDatos =  require('./planeta/aplication/llenarBaseDeDatos');

module.exports.crearPlaneta = async (event, context, callback) => {
    try {
        const data = await planetaRegistrar(event);
        sendResponse(200, data, callback);
    } catch (error) {
        console.log(error);
        sendResponse(500, {message : "Ocurrio un error en Lambda"}, callback);
    }
   
}

module.exports.obtenerPlanetas = async (event, context, callback) => {
    try {
        let data = {};
        data =  await planetaListar();
        sendResponse(200, data, callback);
    } catch (error) {
        console.log(error);
        sendResponse(500, {message : "Ocurrio un error en Lambda"}, callback);
    }
    
}
module.exports.llenarDynamo10x10 = async (event, context, callback) => {
    try {
        let data = {};
        data = await llenarBaseDeDatos();
        sendResponse(200, data, callback);
    } catch (error) {
        console.log(error);
        sendResponse(500, {message : "Ocurrio un error en Lambda"}, callback);
    }
}

function sendResponse(statusCode, data, callback) {
	const response = {
		statusCode: statusCode,
		body: JSON.stringify(data)
	};
	callback(null, response);
}
