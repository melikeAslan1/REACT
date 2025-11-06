const colors = ["red","blue","green"];

const [firstColor, secondColor,thirdColor] = colors;

console.log(thirdColor);

const person= {
     name:"John doe",
     age:30,
     location:"Adana"
};

const newPerson = {
    ...person
};

const {name, ...person3} = person;

const person2= {
    name,
    age:25,
    location:"Adana"
};

console.log(person3);