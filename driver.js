let homeP = require('./src/homePage');
let enCart = require('./src/enCartelera');
let masVot = require('./src/masVotadas');
let sucu = require('./src/sucursales');
//let cont = require('./src/contacto');
let pregF = require('./src/preguntasFrecuentes');


let txt = ' running.';

function homePage (resp) {
	console.log('Home' + txt);
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write("<!DOCTYPE html>");
    resp.write("<html>");

    resp.write(`
    <head>
        <style>
        header {
            text-align: center;
            padding: 3px;
            background-color: lightGrey;
            color: black;
            }
        body {
            text-align: left;
            padding: 3px;
            background-color: grey;
            color: white;
        }
        footer {
            text-align: left;
            padding: 3px;
            background-color: lightGrey;
            color: black;
        }
        </style>
    </head>`);

    resp.write("<header>");
    resp.write("<h1>Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn. </h1>");
    resp.write("</header>");

    resp.write("<body>");
    resp.write("<h3>Total de peliculas en cartelera: " + homeP.funcTotMovies()+ '</h3>');
    resp.write("<h2>Listados de películas</h2>");
    resp.write("<ul>");

    let homeArrMovies = homeP.funcMoviesSort();
    for (let i = 0; i < homeArrMovies.length; i++){
        resp.write(`<li> ${homeArrMovies[i]}</li>`);
    }
    resp.write("</ul>");
    resp.write("</body>");

    resp.write("<footer>");
    resp.write("<h3>Recordá que podés visitar las secciones:</h3>");
    resp.write("<ol>");
    resp.write(`<li> <a href="http://localhost:3030/en-cartelera">En Cartelera </li>`);
    resp.write(`<li> <a href="http://localhost:3030/mas-votadas">Más Votadas </li>`);
    resp.write(`<li> <a href="http://localhost:3030/sucursales">Sucursales </li>`);
    resp.write(`<li> <a href="http://localhost:3030/contacto">Contacto </li>`);
    resp.write(`<li> <a href="http://localhost:3030/preguntas-frecuentes">preguntas-frecuentes </li>`);
    resp.write("<ol>");
    resp.write("</footer>");

    resp.write("</html>");
    resp.end();
}

function enCartelera (resp) {
	console.log('enCartelera' + txt);
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write("<!DOCTYPE html>");
    resp.write("<html>");

    resp.write(`
    <head>
        <style>
        header {
            text-align: center;
            padding: 3px;
            background-color: lightGrey;
            color: black;
            }
        body {
            text-align: left;
            padding: 3px;
            background-color: grey;
            color: white;
        }
        footer {
            text-align: left;
            padding: 3px;
            background-color: lightGrey;
            color: black;
        }
        </style>
    </head>`);

    resp.write("<header>");
    resp.write("<h1>En Cartelera.</h1>");
    resp.write("</header>");

    resp.write("<body>");
    resp.write("<h3>Total de peliculas: " + enCart.funcTotMovies()+ '</h3>');
    resp.write("<h2>Listados de películas </h2>");
    resp.write("<ul>");
    let cartArrMovies = enCart.funcMoviesSort();
    for (let i = 0; i < cartArrMovies.length; i++){
        resp.write(`<li> <h3>Título: ${cartArrMovies[i].title} </h3>
                         <p>Reseña: ${cartArrMovies[i].overview} </p>
                    </li>`);
    }
    resp.write("</ul>");
    resp.write("</body>");

    resp.write("<footer>");
    resp.write("<h3>Recordá que podés visitar las secciones:</h3>");
    resp.write("<ol>");
    resp.write(`<li> <a href="http://localhost:3030/en-cartelera">En Cartelera </li>`);
    resp.write(`<li> <a href="http://localhost:3030/mas-votadas">Más Votadas </li>`);
    resp.write(`<li> <a href="http://localhost:3030/sucursales">Sucursales </li>`);
    resp.write(`<li> <a href="http://localhost:3030/contacto">Contacto </li>`);
    resp.write(`<li> <a href="http://localhost:3030/preguntas-frecuentes">preguntas-frecuentes </li>`);
    resp.write("<ol>");
    resp.write("</footer>");

    resp.write("</html>");
    resp.end();
}

function masVotadas (resp) {
	console.log('masVotadas' + txt);
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write("<!DOCTYPE html>");
    resp.write("<html>");

    resp.write(`
    <head>
        <style>
        header {
            text-align: center;
            padding: 3px;
            background-color: lightGrey;
            color: black;
            }
        body {
            text-align: left;
            padding: 3px;
            background-color: grey;
            color: white;
        }
        footer {
            text-align: left;
            padding: 3px;
            background-color: lightGrey;
            color: black;
        }
        </style>
    </head>`);
    let masVotArrMovies = masVot.totalMasVotadas();
    resp.write("<header>");
    resp.write("<h1>Más Votadas.</h1>");
    resp.write("</header>");
    resp.write("<body>");
    resp.write("<h3>Total de peliculas: " + masVotArrMovies[0]+ '</h3>');
    resp.write("<h3>Rating promedio: " + masVotArrMovies[1]+ '</h3>');
    resp.write("<h2>Listados de películas</h2>");
    resp.write("<ul>");
    
    for (let i = 2; i < masVotArrMovies.length; i++){
        resp.write(`<li> <h3>Título: ${masVotArrMovies[i].title} </h3>
                         <p>Rating: ${masVotArrMovies[i].rating} </p>
                         <p>Reseña: ${masVotArrMovies[i].overview} </p>
                    </li>`);
    }
    resp.write("</ul>");
    resp.write("</body>");

    resp.write("<footer>");
    resp.write("<h3>Recordá que podés visitar las secciones:</h3>");
    resp.write("<ol>");
    resp.write(`<li> <a href="http://localhost:3030/en-cartelera">En Cartelera </li>`);
    resp.write(`<li> <a href="http://localhost:3030/mas-votadas">Más Votadas </li>`);
    resp.write(`<li> <a href="http://localhost:3030/sucursales">Sucursales </li>`);
    resp.write(`<li> <a href="http://localhost:3030/contacto">Contacto </li>`);
    resp.write(`<li> <a href="http://localhost:3030/preguntas-frecuentes">preguntas-frecuentes </li>`);
    resp.write("<ol>");
    resp.write("</footer>");

    resp.write("</html>");
    resp.end();
}

function sucursales (resp) {
	console.log('sucursales' + txt);
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write("<!DOCTYPE html>");
    resp.write("<html>");

    resp.write(`
    <head>
        <style>
        header {
            text-align: center;
            padding: 3px;
            background-color: lightGrey;
            color: black;
            }
        body {
            text-align: left;
            padding: 3px;
            background-color: grey;
            color: white;
        }
        footer {
            text-align: left;
            padding: 3px;
            background-color: lightGrey;
            color: black;
        }
        </style>
    </head>`);
    let arrSucursales = sucu.fSucursales();
    resp.write("<header>");
    resp.write("<h1> Nuestras Salas.</h1>");
    resp.write("</header>");
    resp.write("<body>");
    resp.write("<h3>Total de salas: " + arrSucursales[0]+ '</h3>');
    resp.write("<h2>Listados de salas:</h2>");
    resp.write("<ul>");
    
    for (let i = 2; i < arrSucursales.length; i++){
        resp.write(`<li> <h3>Nombre: ${arrSucursales[i].name} </h3>
                         <p>Dirección: ${arrSucursales[i].address} </p>
                         <p>Descripción: ${arrSucursales[i].description} </p>
                    </li>`);
    }
    resp.write("</ul>");
    resp.write("</body>");

    resp.write("<footer>");
    resp.write("<h3>Recordá que podés visitar las secciones:</h3>");
    resp.write("<ol>");
    resp.write(`<li> <a href="http://localhost:3030/en-cartelera">En Cartelera </li>`);
    resp.write(`<li> <a href="http://localhost:3030/mas-votadas">Más Votadas </li>`);
    resp.write(`<li> <a href="http://localhost:3030/sucursales">Sucursales </li>`);
    resp.write(`<li> <a href="http://localhost:3030/contacto">Contacto </li>`);
    resp.write(`<li> <a href="http://localhost:3030/preguntas-frecuentes">preguntas-frecuentes </li>`);
    resp.write("<ol>");
    resp.write("</footer>");

    resp.write("</html>");
    resp.end();
}

function contacto (resp) {
	console.log('contacto' + txt);
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write("<!DOCTYPE html>");
    resp.write("<html>");

    resp.write(`
    <head>
        <style>
        header {
            text-align: center;
            padding: 3px;
            background-color: lightGrey;
            color: black;
            }
        body {
            text-align: left;
            padding: 3px;
            background-color: grey;
            color: white;
        }
        footer {
            text-align: left;
            padding: 3px;
            background-color: lightGrey;
            color: black;
        }
        </style>
    </head>`);

    resp.write("<header>");
    resp.write("<h1>Contáctanos.</h1>");
    resp.write("</header>");
    resp.write("<body>");
    resp.write("<h3>Contenido</h3>");
    resp.write(`<p>
                ¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. <br>
                Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales. <br>
                Envianos tu consulta,sugerencia o reclamo y será respondido a la brevedad posible. <br>
                Recordá quetambién podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.
                </p>`);
    resp.write("</body>");

    resp.write("<footer>");
    resp.write("<h3>Recordá que podés visitar las secciones:</h3>");
    resp.write("<ol>");
    resp.write(`<li> <a href="http://localhost:3030/en-cartelera">En Cartelera </li>`);
    resp.write(`<li> <a href="http://localhost:3030/mas-votadas">Más Votadas </li>`);
    resp.write(`<li> <a href="http://localhost:3030/sucursales">Sucursales </li>`);
    resp.write(`<li> <a href="http://localhost:3030/contacto">Contacto </li>`);
    resp.write(`<li> <a href="http://localhost:3030/preguntas-frecuentes">preguntas-frecuentes </li>`);
    resp.write("<ol>");
    resp.write("</footer>");

    resp.write("</html>");
    resp.end();
}

function preguntasFrecuentes (resp) {
	console.log('preguntasFrecuentes' + txt);
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    resp.write("<!DOCTYPE html>");
    resp.write("<html>");

    resp.write(`
    <head>
        <style>
        header {
            text-align: center;
            padding: 3px;
            background-color: lightGrey;
            color: black;
            }
        body {
            text-align: left;
            padding: 3px;
            background-color: grey;
            color: white;
        }
        footer {
            text-align: left;
            padding: 3px;
            background-color: lightGrey;
            color: black;
        }
        </style>
    </head>`);
    let arrPregFrecu = pregF.fPreguFreq();
    resp.write("<header>");
    resp.write("<h1>Preguntas Frecuentes.</h1>");
    resp.write("</header>");
    resp.write("<body>");
    resp.write("<h3>Total de preguntas: " + arrPregFrecu[0]+ '</h3>');
    resp.write("<h2>Listados de preguntas:</h2>");
    resp.write("<ul>");
    
    for (let i = 1; i < arrPregFrecu.length; i++){
        resp.write(`<li> <h3>Pregunta: ${arrPregFrecu[i].title} </h3>
                         <p>Respuesta: ${arrPregFrecu[i].answer} </p>
                    </li>`);
    }
    resp.write("</ul>");
    resp.write("</body>");

    resp.write("<footer>");
    resp.write("<h3>Recordá que podés visitar las secciones:</h3>");
    resp.write("<ol>");
    resp.write(`<li> <a href="http://localhost:3030/en-cartelera">En Cartelera </li>`);
    resp.write(`<li> <a href="http://localhost:3030/mas-votadas">Más Votadas </li>`);
    resp.write(`<li> <a href="http://localhost:3030/sucursales">Sucursales </li>`);
    resp.write(`<li> <a href="http://localhost:3030/contacto">Contacto </li>`);
    resp.write(`<li> <a href="http://localhost:3030/preguntas-frecuentes">preguntas-frecuentes </li>`);
    resp.write("<ol>");
    resp.write("</footer>");

    resp.write("</html>");
    resp.end();
}


exports.homePage = homePage;
exports.enCartelera = enCartelera;
exports.masVotadas = masVotadas;
exports.sucursales = sucursales;
exports.contacto = contacto;
exports.preguntasFrecuentes = preguntasFrecuentes;