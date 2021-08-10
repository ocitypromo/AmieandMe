var width = 50;
var height = 50;

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        var area = this.width * this.height;

        return area;
    }

    calcAreaOutside() {
        return width * height;
    }
}

var bigSquare = new Rectangle(100, 100);
var littleSquare = new Rectangle(5, 5);

console.log(bigSquare.calcArea());
console.log(littleSquare.calcArea());
console.log(bigSquare.calcAreaOutside());
console.log(littleSquare.height);

var myCar = {
    color: "Silver",
    make: "Honda",
    model: "Accord",
    year: 2012,
    toString: function() {
        var result = this.color + " " + this.year + " " + this.make + " " + this.model;

        return result;
    }
}

var yourCar = {
    color: "Blue",
    engine: "V12",
    make: "Bugatti",
    model: "Veyron",
    year: 2020
}

console.log(myCar.toString());