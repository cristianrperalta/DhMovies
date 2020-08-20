let fs=require('fs');
let data=fs.readFileSync('./data/movies.json', 'utf8');
let movies=JSON.parse(data);

function funcTotMovies (){
    return  movies.total_movies ;
}

function funcMoviesSort (){
    let vMovies = []
    for (let i = 0; i < movies.total_movies; i++) {
        let objMovieCartelera = {
            title: movies.movies[i]['title'],
            overview: movies.movies[i]['overview']
        };
        vMovies.push(objMovieCartelera);
     }
    vMovies.sort();
    return vMovies;
}

exports.funcTotMovies = funcTotMovies;
exports.funcMoviesSort = funcMoviesSort;