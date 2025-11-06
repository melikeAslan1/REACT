//spread operator
let numbers =[1,2,3,4];
let newNumbers=[...numbers,5];

console.log(newNumbers);

const user={
    name:"Emin",
    surname:"Basbayan"
};

const newUser= {
    ...user,
    age:25
};

console.log("newUser",newUser);

//rest operator
//daha cok toplama yapar.
let sum= (... args) => {
    return args.reduce((acc,current) => acc +current);
};
console.log(sum(10,20,30,40));