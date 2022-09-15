# NODEJS SERVERLESS WITH DYNAMO

1. Clona el repositorio
2. Instala el app en tu computador
$ npm install
3. Levanta esta app de manera local gracias a serverless - offline
$ npm run start
4. Despliega esta app
$ sls deploy
5. Comentarios sobre las rutas
/dev/crearPlaneta -> sirve para crear un registro nuevo de planeta
/dev/obtenerPlanetas -> sirve para listar todos los planetas
/dev/llenarDynamo10x10 -> consume el api de StarWars , trasnforma los atributos al castellano y lo inserta en Dynamo, hace este llenado 10 veces (solo usar 1 vez si se quiere usar mas veces cambiar el idInicial en el archivo llenarBaseDeDatos.js)
