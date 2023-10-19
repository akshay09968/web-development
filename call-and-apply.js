//------------------------- Example 4: apply()/call() ----------------------
var pokemon2 = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves snack: ' + snack + ' and hobby is :' + hobby);
};

pokemonName.call(pokemon2,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon2,['sushi', 'algorithms']);

//------------------------- Example 5: apply()/ call() ----------------------
const book = {
    title: 'Brave New World',
    author: 'Aldous Huxley'
  }
  
  function summary(price) {
    console.log(`${this.title} was written by ${this.author} and the price is ${price}.`)
  }
  
  summary.call(book,500);
  summary.apply(book,[500]);