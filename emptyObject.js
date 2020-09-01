//creating a empty object in two ways

//literal method

const emptyObj = {};

//constructor method Object() to create a objects
const printer = new Object();

printer.name = "someName"
printer.status = "on"

printer.print = function(){
    console.log("The Printer is Printing!");
};

//modifying the printer object
printer['status'] = "off"


delete printer.status

console.log(printer)

