//---------------------------Example 3:-----------------------------------

(function() {       // outer function
    var count = 0;

    function increment() {
      count++;
    }

    increment();
    console.log(count) // 1
}());

console.log('----------------');

(function(){
    const user='aksha';
    function display(name){
        console.log(`username ${user}`);

        console.log(name);
    }
    display(user);
})();
