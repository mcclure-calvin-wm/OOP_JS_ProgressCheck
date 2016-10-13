// Creates a class called Class with two parameters
var Class = function (one, two){
    this.property1 = one;
    this.property2 = two;
    this.property3 = 3;
    this.property4 = 4;
};

// Creates a function called function that creates a string on the html that says, "it works"
Class.prototype.functions = function () {
    document.write("It works!\n");
};

// Creates a subclass called Subclass 1 that inherits Class and adds a property
Subclass1 = function (one, two, three){
    Class.call(this,one,two,three);

    this.property3 = three;
};

// Overwrites property one and makes it equal 2
Subclass1.property1 = 2;

Subclass1.prototype.functions = function () {
    document.write("It works!!\n");
};

// Creates a subclass called Subclass 2 that inherits Class and adds a property
Subclass2 = function (one, two, three, four){
    Class.call(this,one,two,three);

    this.property3 = three;
    this.property4 = four;
};

Subclass2.prototype.functions = function () {
    document.write("It works!!!\n");
};

// Creates a subclass called Subclass 3 that inherits Class and adds a property
Subclass3 = function (one, two, three, four, five){
    Class.call(this,one,two,three);

    this.property3 = three;
    this.property4 = four;
    this.property5 = five;
};

Subclass3.prototype.functions = function () {
    document.write("It works!!!!\n");
};

// Creates a subclass called Subclass 4 that inherits Class and adds a property
Subclass4 = function (one, two, three, four,five,six){
    Class.call(this,one,two,three);

    this.property3 = three;
    this.property4 = four;
    this.property5 = five;
    this.property6 = six;
};

Subclass4.prototype.functions = function () {
    document.write("It works!!!!!\n");
};

function main () {

// Creates an empty array called ClassArray
    var ClassArray = [];

// Adds all the instantiations of the classes
    ClassArray[0] = new Class("one", "two");
    ClassArray[1] = new Subclass1("one", "two", "three");
    ClassArray[2] = new Subclass2("one", "two", "three", "four");
    ClassArray[3] = new Subclass3("one", "two", "three", "four", "five");
    ClassArray[4] = new Subclass4("one", "two", "three", "four", "five", "six");

// Runs the function function for each class
    for (var i = 0; i < ClassArray.length; i++) {
        ClassArray[i].functions();
    }
}