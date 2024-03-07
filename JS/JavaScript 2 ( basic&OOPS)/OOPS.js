// // this key word
// // object

// let user1 = {
//   username: "kira",
//   age: 21,
//   login() {
//     console.log(this);
//     console.log(this.username);
//   },
// };
// let a = user1;
// a.login();

// console.log(this);
// //function

// function account() {
//   let user = "kira";
//   console.log(this);
// }
// account();

//-------------------------------------------------------------------------------//
// OOPS
// creating class
// why we static in class - when we call static method use the class name to call the static method
// base class, parent class, Super class
class user {
  static numberofusers = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    user.numberofusers++;
  }
  login() {
    console.log(`Hi ${this.name} You are logged in to your account`);
  }
  logout() {
    console.log("You are logged out");
  }
  static displaynoofusers() {
    console.log(`No of Users : ${user.numberofusers}`);
  }
}
// creating object for class
let user1 = new user("Jiraiya", 22);
let user2 = new user("Itachi", 25);
user1.login();
user.displaynoofusers();

// --------- Inheritance ------
// derived class, child class, Sub Class
class paiduser extends user {
  constructor(name, age) {
    super(name, age); // passing value to parent class using 'super'
    this.storage = 100;
  }
  message() {
    console.log(`Hi ${this.name} You have ${this.storage}GB free storage`);
  }
  //overriding
  login() {
      console.log(`welcome to page ${this.name} `);
      return this
  }
}
let paiduser1 = new paiduser("kamalesh", 24);
// paiduser1.login();
// paiduser1.message();

//method chaining  --- using this call the method for chaining
paiduser1.login().message();


// get and set