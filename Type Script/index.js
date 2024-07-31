// let a = {
//     names: "Kira",
//     age: 23,
//     display: function () {
//         console.log(`my name is ${this.names} and age is ${this.age}. `);
//         return 3;
//     }
// }

// a.age;
// let b = a.display();
// // b();
// console.log(b)

class Work {
    user;
    val;
    static S=0;

    constructor(u, v) {
        this.user = u;
        this.val = v;
       Work.S ++;
    }
}

let w = new Work("Kira", 33);
let w1 = new Work("Kira", 33);
let w2 = new Work("Kira", 33);
console.log(Work.S);
