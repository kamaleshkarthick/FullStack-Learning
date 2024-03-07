// function pageFunctionOn() {
//   let head = document.getElementsByTagName("HEAD")[0];
//   let link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.type = "text/css";
//   link.href = "style.css";
//   head.appendChild(link);
// }

// let n = prompt("Enter the Value");
// console.log(n);
// console.log(typeof n);
// console.log(n == 5);
// console.log(n === 5);
// console.log(Number(n));

//------------------------

// var concatnames = "";
// for (let i = 0; i < 2; i++) {
//   let userName = prompt("Enter the name");
//   concatnames += userName + ",";
//   let names = concatnames.split(",");
//   console.log(concatnames);
//   console.log(names);

//   console.log(concatnames);
// }

// var concatnames = "";

// let arr = [];
// for (let i = 0; i < 2; i++) {
//   let userName = prompt("Enter the name");
//   let arr = ["jiraiya", "itachi"];
//   arr.push(userName);
//   console.log(arr);
// }
// console.log(arr);

// let str1 = "Srtrive not to be a Srtrive";
// let str2 = str1.replaceAll("Srtrive", "aim");
// console.log(str1);
// console.log(str2);

// let a = "34";
// console.log(typeof a, a);
// a= parseInt(a);
// console.log(typeof a, a);


// let arr = new Array(4)
// console.log(arr)
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 1;
// arr[5] = 6;
// console.log(arr)


let a = 5, b = 2;
let oprt = "/";
switch (oprt) {
  case "+":
    console.log(a+b)
    break;
  case "-":
    console.log(a-b)
    break;
  case "*":
    console.log(a*b)
    break;
  case "/":
    console.log(a/b)
    break;
 }
