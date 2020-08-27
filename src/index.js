let homeP = require('./homePage');
let enCart = require('./enCartelera');
let masVot = require('./masVotadas');
let sucu = require('./sucursales');
let cont = require('./contacto');
let pregF = require('./preguntasFrecuentes');

function escrituraLog(texto){
    console.log(texto + ' running.');
} 

function homePage (resp) {
    escrituraLog('Home');
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write(homeP.homePageBuildXML());
    resp.end();
}

function enCartelera (resp) {
    escrituraLog('enCartelera');
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write(enCart.enCarteleraBuildXML());
    resp.end();
}

function masVotadas (resp) {
    escrituraLog('masVotadas');
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write(masVot.masVotadasBuildXML());
    resp.end();
}

function sucursales (resp) {
    escrituraLog('sucursales');
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write(sucu.sucursalesBuildXML());
    resp.end();
}

function contacto (resp) {
    escrituraLog('contacto');
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write(cont.contactoBuildXML());
    resp.end();
}

function preguntasFrecuentes (resp) {
    escrituraLog('preguntasFrecuentes');
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write(pregF.preguntasFrecuentesBuildXML());
    resp.end();
}


exports.homePage = homePage;
exports.enCartelera = enCartelera;
exports.masVotadas = masVotadas;
exports.sucursales = sucursales;
exports.contacto = contacto;
exports.preguntasFrecuentes = preguntasFrecuentes;