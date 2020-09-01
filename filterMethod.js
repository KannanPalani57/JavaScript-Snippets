const names = ['David', 'Richard', 'Veronika'];

const shortNames = names.filter(function(name) {
  return name.length < 6;
});

//condition is very important for Array filter method.
//So that only, It can be filter the array
//And,it makes the new copy of the array.