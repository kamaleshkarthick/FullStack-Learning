// --- Aysn & Await
// normal function
function fn() {
  return console.log(`It is a normal function`);
}
fn();

// asyn
async function fna() {
  return console.log(`It is Asyn function`);
}
fna();
console.log(fna()); // asyn return as promise

async function fna1() {
  //    console.log(`fna1`)
  return `It is Asyn function 1`;
}
fna1();
console.log(fna1()); // asyn return as promise
fna1().then((msg) => console.log(msg));

// Await
// promise
const ticketBooking = new Promise((resolve, reject) => {
  let booking = true;
  if (booking) resolve([850,25]);
  else reject();
});
ticketBooking
  .then((amt) => console.log(`You ticket is booked and ticket price is ${amt}${kk}`))
  .catch(() => console.log(`You is not booked`));

async function awaitstatus() {
  console.log(`Hi Await is call`);
  res = await ticketBooking;
  console.log(res);
  console.log(`bye`);
}
awaitstatus();

//--
let b = new Promise((r, ri) => {
    
})
console.log(b);
console.log(ticketBooking);
console.log();