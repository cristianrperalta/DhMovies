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
            };
            let objMovie = {
            title: movies.movies[i]['title'],
            overview: movies.movies[i]['overview'],
            rating: movies.movies[i]['vote_average']
        };
        arrMoviesMasVotadas.push(objMovie);
     }
    let promedio = totalVote / contMoviesMasVotadas;
    arrMoviesMasVotadas.unshift(promedio.toFixed(2));
    arrMoviesMasVotadas.unshift(contMoviesMasVotadas);
    arrMoviesMasVotadas.sort(function (a, b) {
    if (a.title> b.title) {
        return 1;
    }
    if (a.title< b.title) {
        return -1;
    }
    // a must be equal to b
    return 0;
    });

    return arrMoviesMasVotadas
}

exports.totalMasVotadas = totalMasVotadas;