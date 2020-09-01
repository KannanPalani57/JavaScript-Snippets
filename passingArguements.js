function makeTen(n){
    n = 10;
}

var number = 9

makeTen(number)

console.log(number)

let originalObject = {
    favoriteColor: 'red'
  };
  
  function setToBlue(object) {
    object.favoriteColor = 'blue';
  }
  
  setToBlue(originalObject);
  
  originalObject.favoriteColor;
  // 'blue'
  
  var per = {
      name: "person",
      sayHello: function(name){
          console.log("Hello "+name)
      }
  }

  console.log(per.sayHello("Kannan"))