let server = require('./customFunctions'); //Importamos el módulo customFunctions creado
let router = require('./router'); //Importamos el módulo router
let drivers = require('./src/index'); //Importamos el módulo index
let driver = {}
driver["/"] = drivers.homePage;
driver["/en-cartelera"] = drivers.enCartelera;
driver["/mas-votadas"] = drivers.masVotadas;
driver["/sucursales"] = drivers.sucursales;
driver["/contacto"] = drivers.contacto;
driver["/preguntas-frecuentes"] = drivers.preguntasFrecuentes;
server.inicializar(router.route, driver); //Llama al método inicializar del objeto server