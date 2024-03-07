// Synchronous & Asynchronous

console.log("step 1");
console.log("step 2");
console.log("step 3");
setTimeout(() => console.log("stp 1"), 4000);
setTimeout(() => console.log("stp 2"), 2000);
setTimeout(() => console.log("stp 3"), 1000);
console.log("blow the asyn ");
let n = 10;
for (let i = 0; i <= n; i++) {
  console.log(`the value Of i : ${i}`);
}
// setInterval(() => console.log("Hi --"), 2000);
let m = 10;
for (let i = 0; i <= m; i++) {
  console.log(`the value Of i : ${i}`);
}

// ----Digital Clock

let ampm = document.querySelector("#ampm");
function displayTime() {
  let dateTime = new Date();
  let hr = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
 
  if (hr > 12) {
    hr -= 12;
    ampm.innerHTML = "PM";
    }
  else if (hr == 12) {
      ampm.innerHTML="PM"
    }
  document.querySelector("#hours").innerHTML = padZero(hr);
  document.querySelector("#mins").innerHTML = padZero(min);
  document.querySelector("#seconds").innerHTML = padZero(sec);
}
function padZero(num) {
  return num < 10 ? `0${num}` : num;
}
setInterval(displayTime, 1000);
