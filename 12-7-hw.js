// Create a class of hamster with 3 attributes and 3 methods
class Hamster {
    constructor(name){
        this.name = name
        this.owner = ""
        this.price = 15
    }
    wheelRun(){
        console.log('squaek squeak')
    }
    eatFood(){
        console.log('nibble')
    }
    getPrice(){
        return this.price;
    }
}

const gus = new Hamster("Gus");
console.log(gus.getPrice());

//

// Create a class of person with 7 attributes and 8 methods

class Person {
    constructor(name){
        this.name = name
        this.age = 0
        this.weight = 0
        this.mood = 5
        this.hamsters = []
        this.bankAccount = 0
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }
    
    getWeight(){
        return this.weight
    }

    greet(){
        console.log(`hi my name is ${this.name}`);
    }

    eat(){
        this.weight++
        this.food++
    }

    exercise(){
        this.weight--
    }

    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }

    buyHamster(hamsters){
        this.hamsters.push(hamsters);
        this.mood += 10;
        this.bankAccount -= hamsters.getPrice();
    }
}

// Instantiate a new Person named Timmy
let timmy = new Person("Timmy");

// Timmy's age is 5 years
timmy.age = 5
console.log(timmy.getAge())

// He's bummed, have him eat 5 times
timmy.eat(5);
console.log(timmy.getWeight() + timmy.mood)

// Have him exercise 5 times
timmy.exercise(5);
console.log(timmy.getWeight())

// Timmy's age is 9 years
timmy.age = 9

// Hamsters owner is Timmy
gus.owner = "Timmy"

// Timmy buys Gus
timmy.buyHamster(gus);
console.log(timmy.bankAccount)
console.log(timmy.hamsters)

// Timmy's age is 15 years
timmy.age = 15

//Timme ate twice
timmy.eat(2)

// Timmy exercised twice
timmy.exercise(2)


// HW part 2
//Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  //Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
  class Chef {
    makeDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }
  
  // Have the Chef create 3 dinners, log the dinners
  const dinner1 = new Chef().makeDinner("Chicken", "Rice", "Cookies");
  const dinner2 = new Chef().makeDinner("Turkey", "Potatoes", "Chocolate");
  const dinner3 = new Chef().makeDinner("Soup", "Bread", "Ice Cream");
  console.log(dinner1);
  console.log(dinner2);
  console.log(dinner3);