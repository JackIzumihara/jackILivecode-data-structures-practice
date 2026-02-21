var pokemon = {
    name: "Pikachu", 
    type: "Electric", 
    moves: ["Thunderbolt", "Quick attack"],
    speak: function(){
        console.log("Pika Pika");
    }
};

console.log(pokemon.name + " is an " + pokemon.type + " type");
console.log(pokemon.type);
console.log(pokemon.moves[0]);
console.log(pokemon.moves[1]);
console.log(pokemon.speak());
