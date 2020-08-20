// para obtener JSON
function funcTotMovies (){
    let fs=require('fs');
    let data=fs.readFileSync('./data/movies.json', 'utf8');
    let movies=JSON.parse(data);
    return  movies.total_movies ;
}

function funcMoviesSort (){
    let fs=require('fs');
    let data=fs.readFileSync('./data/movies.json', 'utf8');
    let movies=JSON.parse(data);

    let vMovies = []
    for (let i = 0; i < movies.total_movies; i++) {
        for (const prop in movies.movies[i]) {
            if(prop === 'title'){
                vMovies.push(movies.movies[i][prop])
            }
        }
     }
     vMovies.sort();
     return vMovies;
}

exports.funcTotMovies = funcTotMovies;
exports.funcMoviesSort = funcMoviesSort;