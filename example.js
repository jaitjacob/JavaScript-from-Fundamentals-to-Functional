const game = {
    'suspects' : [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        },
        {
            doesnthavename: "some name",
            doesnthavecolor:"no color"
        }
    ]
}

// for(let i=0; i<game.suspects.length; i++){
//     console.log(game.suspects[i]);
// }

for(let o in game){
    console.log(game[o])
}