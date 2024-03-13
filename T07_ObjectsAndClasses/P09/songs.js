function solve(instructionsArr) {
    class Song {
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    const songsArr = instructionsArr;
    const _ = songsArr.shift();
    const playlistToPlay = songsArr.pop();
    const songsObjArr = [];
    
    for (const song of songsArr) {
        let [type, name, time] = song.split('_');
        songsObjArr.push(new Song(type, name, time));
    }

    let songsToPlay = [];

    if (playlistToPlay === 'all') {
        songsToPlay = songsObjArr;
    } else {
        songsToPlay = songsObjArr.filter(x => x.type == playlistToPlay);
    }

    for (const song of songsToPlay) {
        console.log(song.name);
    }
}

solve(
    [3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']
        )