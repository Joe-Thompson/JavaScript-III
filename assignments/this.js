/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  window binding - "this" refers to the browser
* 2.  implicit binding - "this" refers to the left-hand side of dot notation
* 3.  explicit binding - "this" refers to a parameter that can later be binded by "this"
* 4.  new binding - "this" refers to an empty object that we can fill later
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const food = {
  name: "apple",
  color: "red",
  taste: "crispy",
  info: function() {
    return `${this.name} are ${this.color} and very ${this.taste}`;
  }
}
console.log(food.info());
   
// Principle 3

// code example for New Binding

function Animal (food) {
  this.food = food;
  this.eat = function () {
   return `Enjoys eating ${this.food}`;
  };
};

const goat = new Animal ('anything');
console.log(goat.eat());

// Principle 4

// code example for Explicit Binding

function Tickects (price, section) {
  this.price = price;
  this.section = section;
};

function Fenway (price, section, sold) {
  Tickects.call(this, price, section);
  this.sold = function() {
    return `${this.section} costs ${this.price} per seat`;
  }
}

console.log(new Fenway('lower deck', 125).sold());