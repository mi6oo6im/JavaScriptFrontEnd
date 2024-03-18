function solve(inputArr) {
    const moviesArr = [];

    for (const row of inputArr) {
        if (row.includes('addMovie ')){
            const movieName = row.split('addMovie ')[1];
            moviesArr.push({
                name: movieName
            })
        } else if (row.includes(' directedBy ')){
            const movieName = row.split(' directedBy ')[0];
            const movieDirector = row.split(' directedBy ')[1];

            for (const movie of moviesArr) {
                if (movie.name === movieName) {
                    movie.director = movieDirector;
                }
            }

        } else if (row.includes(' onDate ')){
            const movieName = row.split(' onDate ')[0];
            const movieDate = row.split(' onDate ')[1];

            for (const movie of moviesArr) {
                if (movie.name === movieName) {
                    movie.date = movieDate;
                }
            }
        }
    }

    for (const movie of moviesArr) {
        if (
            movie.hasOwnProperty('name') &&
            movie.hasOwnProperty('director') &&
            movie.hasOwnProperty('date')
        ) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve(
    ['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
    ]
)
console.log('-----------------------------');
solve(
    [
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    ]
)
