let nameObj = {
    name: 'aksh'
}

let Print = {
    name:'daksh',
    display : function(){
        console.log(this.name);
    }
}
let r = Print.display.bind(nameObj);
r();

console.log('--------------------');

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(ownerName){
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}

var myCarDetails = car.displayDetails.bind(car, "Vivian");
//console.log(myCarDetails());
myCarDetails();

console.log('--------------------');

//-------------------------- Example 3: bind()--------------------------------
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemon1 = {
    firstname: 'Balba',
    lastname: 'Saur ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

//Since both the above pokemon objects are having the same properties and same function so we use bind(object)
//Here we want to bind with the pokemon object and call its inner function
var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
logPokemon();

//Here we want to bind with the pokemon1 object and call its inner function
var logPokemon1 = pokemonName.bind(pokemon1); // creates new object and binds pokemon
logPokemon1();