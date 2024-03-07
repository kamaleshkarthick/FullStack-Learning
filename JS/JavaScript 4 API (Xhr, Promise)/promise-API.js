// Promise API
// simple promise
const ticketBooking = new Promise((resolve, reject) => {
  let booking = false;
  if (booking) resolve(850);
  else reject();
});

ticketBooking
.then((amt) => console.log(`You ticket is booked and ticket price is ${amt}`))
.catch(() => console.log(`You is not booked`));

// In function
const ticketBook = () => {
  return new Promise((resolve, reject) => {
    let booking = true;
    if (booking) resolve(1050);
    else reject();
  });
};

ticketBook()
  .then((amt) => console.log(`You ticket is booked and ticket price is ${amt}`))
  .catch(() => console.log(`You is not booked`));

// -----  this Key word  --------

let function1 = () => {
  console.log(this);
  let obj1 = {
    username: "Itachi",
    objfn: function () {
      console.log(this); // this key word
      console.log(`hi ${this.username}`);
    },
  };
  obj1.objfn()
  // we assiging into goble varible that why 'this' key is in window
  let a = obj1.objfn;
  a();
};

function function2() {
  console.log(this);
}
function1();
function2();
