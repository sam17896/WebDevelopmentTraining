const constant = 10;
/// Uncaught TypeError: Assignment to constant variable.
// constant = 11;
console.log(constant);

let variable = 10;
var anotherVariable = 10;

let variableString = "somestring";
let variableNumberArray = [1, 2, 3];
let variableStringArray = ["1", "2", "3"];

let inferVariable = anotherVariable + variableString;

console.log(inferVariable);

console.log(variableNumberArray.concat(variableStringArray));
let object = {};
object.property1 = "hello";
object.property2 = "hello1";
object.property3 = 2;
object.property4 = [7, 8, 9];
object.property5 = { subproperty: 1 };

console.log(object);
console.log(object.property1);
console.log(object.property5.subproperty);

// console.log(object.wrongNumber) // ERROR

console.log({ variable, anotherVariable });

if (variable == anotherVariable) {
  console.log("variable is equal to anotherVariable");
}

// Diff between let and var
// read in detail here https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log({ foo, bar });

  {
    let baz = "Bazz";
    console.log(baz);
    console.log({ foo, bar });
  }

  console.log({ foo, bar });
  //   console.log(baz); // ReferenceError

  console.log({ variable, anotherVariable, constant });
}

run();

for (let i = 0; i < 10; i++) {
  console.log(i);
}
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

let testVariable = 10;

switch (testVariable) {
  case 10:
    console.log("I am number 10");
    break;

  case "10":
    console.log("I am string 10");
    break;
}

function someOtherFunction() {
  var somestring = "somestring";
  var somenumber = 10;

  var setNumber = function (number) {
    somenumber = number;
  };

  var setString = function (string) {
    somestring = string;
  };

  var getNumber = function () {
    return somenumber;
  };
  var getString = function () {
    return somestring;
  };

  return {
    setNumber,
    setString,
    getNumber,
    getString,
  };
}

const object1 = someOtherFunction();

console.log(object1);

object1.setNumber(50);
console.log(object1.getNumber());
console.log(object1.getString());
object1.setString("someotherstring");
console.log(object1.getString());
object1.setString(50);
console.log(object1.getString());
