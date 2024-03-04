let a = 1;
console.log(a++);
// class
class User {
  static nofuser = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.nofuser++;
  }
  login() {
    console.log("You logged in");
  }
  static displayuser() {
    console.log("display user :" + User.nofuser++);
    console.log(User.nofuser);
  }
}

let user1 = new User("divay", 21);
User.displayuser();
