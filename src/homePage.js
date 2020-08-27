// para obtener JSON
let fs=require('fs');
let data=fs.readFileSync('./data/movies.json', 'UTF-8');
let movies=JSON.parse(data);

function totalMovies (){
    return  movies.total_movies ;
}

function moviesSort (){
    let vMovies = []
    for (let i = 0; i < movies.total_movies; i++) {
        let objMovie = {
            title: movies.movies[i]['title'],
        };
        vMovies.push(objMovie);
    }
    vMovies.sort(function(a, b){
        if (a.title< b.title) return 1 
        if (a.title> b.title) return -1 
        return 0
    });
    
    let vMoviesOL = ' ';
    for(let i=0;i<vMovies.length;i++){
       vMoviesOL=`<li>${vMovies[i].title}</li>` + vMoviesOL;
    }
    return vMoviesOL;
}


function homePageBuildXML(){
    let homeArrMovies = moviesSort();
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
            <h1>Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.</h1>
        </header>
        <body>
            <h3>Total de peliculas en cartelera: ${totalMovies()}</h3>
            <ol>
                ${homeArrMovies}
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

exports.homePageBuildXML = homePageBuildXML;