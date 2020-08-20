let server = require('./servidor'); //Importamos el módulo server creado
let router = require('./router'); //Importamos el módulo router
let drivers = require('./driver'); //Importamos el módulo driver
let driver = {}
driver["/"] = drivers.homePage;
driver["/en-cartelera"] = drivers.enCartelera;
driver["/mas-votadas"] = drivers.masVotadas;
driver["/sucursales"] = drivers.sucursales;
driver["/contacto"] = drivers.contacto;
driver["/preguntas-frecuentes"] = drivers.preguntasFrecuentes;
server.inicializar(router.route, driver); //Llama al método inicializar del objeto server