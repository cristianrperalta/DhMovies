function inicializar(route, driver) { //Pasamos el objeto route y el objeto driver
	let server = require('http').createServer();
	let url = require('url');
	function control(petic, resp) {
		let pathName = url.parse(petic.url).pathname;
		console.log('Petición recibida'); //Texto que saldrá por consola
		route(driver, pathName, resp); //Además de pathName, pasamos el driver y resp
		resp.end();
	}
	server.on('request', control).listen(3030);
	console.log('Servidor inicializado en puerto 3030');
}
exports.inicializar = inicializar; //Exportamos la función
