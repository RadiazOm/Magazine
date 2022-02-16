let artist = "eeeee";
let album = "aaaaaa";
let specialEdition = true;
let songs = ["e1", "e2", "e3", "e4", "e5"];
let duration = 25;
console.log(artist);
console.log(album);
console.log(specialEdition);
console.log(songs);
console.log(duration);

for (let song of songs){
    console.log("dit nummer heet " + song);
}

if (specialEdition) {
    console.log("dit album is heel speciaal")
}

if (duration <= 30) {
    console.log("zeer kort album")
} else if (duration <= 60) {
    console.log("gemiddeld album")
} else if (duration <= 90) {
    console.log("waar voor je geld")
} else {
    console.log("hmm, dat is best extreem")
}

switch (true) {
    case duration <= 30:
        console.log("zeer kort album");
        break;
    case duration <= 60:
        console.log("gemiddeld album");
        break;
    case duration <= 90:
        console.log("waar voor je geld");
        break;
    default:
        console.log("hmm, dat is best extreem");
        break;
}

console.log(`er staan ${songs.length} nummers op dit album`);
songs.push("e6");
songs[1] = "e2 new edition"

for (let song of songs) {
    console.log(song);
}


function newSong(song) {
    songs.push(song);
}

newSong("e7")
newSong("e8")
console.log(songs)