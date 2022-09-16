# NODEJS SERVERLESS WITH DYNAMO

1. Clona el repositorio
2. Instala el app en tu computador
$ npm install
4. Verificar las credenciales de aws y las otras variables de entorno
5. Levanta esta app de manera local gracias a serverless - offline
$ npm run start
6. Despliega esta app
$ sls deploy
7. Comentarios
Sobre las rutas
/dev/crearPlaneta -> sirve para crear un registro nuevo de planeta
/dev/obtenerPlanetas -> sirve para listar todos los planetas
/dev/llenarDynamo10x10 -> consume el api de StarWars , trasnforma los atributos al español y lo inserta en Dynamo, hace este llenado 10 veces (solo usar 1 vez si se quiere usar mas veces cambiar el idInicial en el archivo llenarBaseDeDatos.js)
Sobre la documentacion con OpenApi
se uso el plugin Serverless Openapi Documentation, las configuraciones estan en el archivo serverless.doc.yml, usar el siguiente comando para generar el archivo openapi.yml, se documento el rest CrearPlaneta
$ serverless openapi generate
Sobre las pruebas
se uso Jest para las pruebas unitarias, usar el siguiente comando para ejecutar las pruebas, se hizo pruebas al rest CrearPlaneta
$ npm run test
