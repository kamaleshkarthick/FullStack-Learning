// var a: { a: number, b: number, c: number };
// let a = { a: 2, b: 4, c: 3 };
// a={ a: 1, b: 2, c:3};
// console.log(a)

// function add(a: number, b: number) {
//     return a + b;
// }

// --- Generics---
function logmethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const orignalmethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(` display the function ${propertyKey} with arguments ${args.join}`)
        const result = orignalmethod.apply(this, args)
        console.log(`Result : ${result}`)
        return result;

         
    }
}







class calu{
    add(a: number, b: number) {
        const result = a + b;
        return result;
    }
    sub(a: number, b: number) {
        const result = a - b;
        return result;
    }
    
} 