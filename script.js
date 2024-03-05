/*************************Question no 1**********************************/
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating ?? "PG";
  }
  getPG() {
    return this.rating === "PG";
  }
}

// Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Testing getPG method
const movies = [
  new Movie("Movie 1", "Studio 1", "PG"),
  new Movie("Movie 2", "Studio 2", "PG-13"),
  new Movie("Movie 3", "Studio 3", "PG"),
  new Movie("Movie 4", "Studio 4", "R"),
];

const pgMovies = movies.filter((movie) => movie.getPG());
console.log(pgMovies);

/*************************Question no 2**********************************/

class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

/*************************Question no 3**********************************/

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getAge() {
    return this.age;
  }


  getGender() {
    return this.gender;
  }
}

const person1 = new Person("John", "Doe", 30, "Male");

console.log(person1.getFirstName()); // Output: John

console.log(person1.getAge()); // Output: 30


/*************************Question no 4**********************************/

class UberPriceCalculator {
   
    constructor(baseFare, perMinuteRate, perMileRate) {
        this.baseFare = baseFare;
        this.perMinuteRate = perMinuteRate;
        this.perMileRate = perMileRate;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        return this.baseFare + (distanceInMiles * this.perMileRate) + (timeInMinutes * this.perMinuteRate);
    }
}

const calculator = new UberPriceCalculator(5, 0.2, 1.5); // Example rates

const price = calculator.calculatePrice(10, 20); // 10 miles, 20 minutes

console.log(price); // Output: Rs.24/-
