let fs=require('fs');
let data=fs.readFileSync('./data/movies.json', 'utf8');
let movies=JSON.parse(data);

function totalMasVotadas (){
    let arrMoviesMasVotadas = [];
    let contMoviesMasVotadas = 0;
    let totalVote = 0;
    for (let i = 0; i < movies.total_movies; i++) {
            if (movies.movies[i]['vote_average']>=7){
                ++contMoviesMasVotadas;
                totalVote = movies.movies[i]['vote_average'] + totalVote;
                let objMovie = {
                    title: movies.movies[i]['title'],
                    overview: movies.movies[i]['overview'],
                    rating: movies.movies[i]['vote_average']
                };
                arrMoviesMasVotadas.push(objMovie);
            };
     }
    let promedio = totalVote / contMoviesMasVotadas;
    arrMoviesMasVotadas.unshift(promedio.toFixed(2));
    arrMoviesMasVotadas.unshift(contMoviesMasVotadas);
    arrMoviesMasVotadas.sort(function (a, b) {
        if (a.title< b.title) return 1
        if (a.title> b.title) return -1
        return 0
    });

    return arrMoviesMasVotadas
}

function listadoMasVotadas(){
    let arrMasVotadas = totalMasVotadas()
    let vMasVotadas = ' ';
    for (let i = 2; i < arrMasVotadas.length; i++){
        vMasVotadas = `<li> <h3>Título: ${arrMasVotadas[i].title} </h3>
                        <p>Rating: ${arrMasVotadas[i].rating} </p>
                        <p>Reseña: ${arrMasVotadas[i].overview} </p>
                    </li>` + vMasVotadas;
    }

    return vMasVotadas;
}



function masVotadasBuildXML(){
    let masVotArrMovies = totalMasVotadas();
    let listMasVotadas = listadoMasVotadas()
    let txtContent = '';
    txtContent = `
    <!DOCTYPE html>
    <html>
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
        </head>
        <header>
            <h1>Más Votadas.</h1>
        </header>
        <body>
            <h3>Total de peliculas: ${masVotArrMovies[0]}</h3>
            <h3>Rating promedio: ${masVotArrMovies[1]}</h3>
            <h3>Listados de películas: </h3>
            <ol>
                ${listMasVotadas}
            </ol>
        </body>
        <footer>
            <h3>Recordá que podés visitar las secciones:</h3>
            <ol>
                <li> <a href="http://localhost:3030/en-cartelera">En Cartelera </li>
                <li> <a href="http://localhost:3030/mas-votadas">Más Votadas </li>
                <li> <a href="http://localhost:3030/sucursales">Sucursales </li>
                <li> <a href="http://localhost:3030/contacto">Contacto </li>
                <li> <a href="http://localhost:3030/preguntas-frecuentes">preguntas-frecuentes </li>
            </ol>
        </footer>
    </html>`
    return txtContent;
};

exports.masVotadasBuildXML = masVotadasBuildXML;