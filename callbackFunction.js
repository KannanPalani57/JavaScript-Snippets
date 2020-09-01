
function sum(a, callback){
    return a + callback();
}

function callback(){
    return 3;
}
//functions can be passed as arguments.
//when function passed to arguments, it does need parentheses().
//using parenthese () means, you are invoking the particular method.
sum(7, callback)

//A good example for callback function is down below.s

function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        console.log(array[i]);
      }
}
}
function isPositive(n) {
    return n > 0;
};

each([-2, 7, 11, -4, -10], isPositive)