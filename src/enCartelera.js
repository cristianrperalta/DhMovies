let fs=require('fs');
let data=fs.readFileSync('./data/movies.json', 'utf8');
let movies=JSON.parse(data);

function totalMovies (){
    return  movies.total_movies ;
}

function MoviesSort (){
    let vMovies = []
    for (let i = 0; i < movies.total_movies; i++) {
        let objMovieCartelera = {
            title: movies.movies[i]['title'],
            overview: movies.movies[i]['overview']
        };
        vMovies.push(objMovieCartelera);
     }
    vMovies.sort(function (a, b) {
        if (a.title< b.title) return 1
        if (a.title> b.title) return -1
        return 0
    });
    let vMoviesOL = ' ';
    for(let i=0;i<vMovies.length;i++){
       vMoviesOL=`<li> <h3>Título: ${vMovies[i].title}</h3>
                       <p>Reseña: ${vMovies[i].overview}</p>
                  </li>` + vMoviesOL;
    }
    return vMoviesOL;
}

function enCarteleraBuildXML(){
    let total_movies = totalMovies();
    let carteleraArr = MoviesSort()
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
            <h1>En Cartelera.</h1>
        </header>
        <body>
            <h3>Total de peliculas en cartelera: ${total_movies}</h3>
            <h2>Listados de películas </h2>
            <ol>
                ${carteleraArr}
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

exports.enCarteleraBuildXML = enCarteleraBuildXML;