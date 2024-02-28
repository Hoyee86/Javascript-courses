console.log("Hello world");


const person = {
    firstName: "Tunmise",
    middleName: "Paul"
}

const otherPerson = person;

person.firstName = "Mokalelele";
console.log(person);
console.log(otherPerson); // the same output as "person"

console.log(person === otherPerson);


// SHALLOW CLONING
// spread Operator

//******** Examples */

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(...numbers)

// const newNumber = [...numbers];
// console.log(newNumber);


// To get the equality

const numbers = [1, 2, 3, 4, 5, 6];
const copiedNumber = numbers
const newNumber = [...numbers];
const numbers$ = numbers.slice(2, 4)

numbers.push(8)

console.log(numbers)
console.log(copiedNumber)
console.log(newNumber)
console.log(numbers$)


console.log(numbers === copiedNumber);
console.log(numbers === newNumber);


// OBJECT CLONING

const personDetails = {
    name: "Zainab",
    age: 40
}
const changeDetails = {...personDetails}
personDetails.name = "Soliu"

console.log(personDetails)

console.log(changeDetails)



/// another example

const originalObj = {
    name: "Bash",
    age: 20,
    address:{
        city: "pegamut",
        state: " Ogun"
    }
};


const cloneObjs = Object.assign({}, originalObj);

cloneObjs.name = "Naphy",
cloneObjs.address.city = "Elejigbo"

console.log("originalObj", originalObj )
console.log("cloneObj", cloneObjs)


// spreading operator is used to merging array or an object together

const arr1 = [1, 2, 3, 4,];
const arr2 = [4, 4, 6, 7];
const arr3 = [8, 9, 10]

const merged = [...arr1, ...arr2, ...arr3]
console.log(merged)


//****** Example */

const text = {name: "Bode"};
const numbs = [1, 2, 3, 4];

const cloneMerged = {...text, data:[...numbs]}

cloneMerged.name = "Hayzed";
cloneMerged.data.push(5);

console.log(text)
console.log(numbs)
console.log(cloneMerged)




// DEEP CLONING:

//**** Example ****/

// const details = {
//     firstName: "Kenny",
//     car: {
//         brand: "Toyota",
//         wheel: 4,
//         color: 'red'
//     }
// };

// const newDetails = {...details}
// newDetails.firstName = "Mikel"

// newDetails.car.color = "blue"

// console.log(details);
// console.log(newDetails);


/// JSON.stringnify


const details = {
    firstName: "Kenny",
    car: {
        brand: "Toyota",
        wheel: 4,
        color: 'red'
    }
};

const stringnifiedDetails = JSON.stringify(details)
console.log(stringnifiedDetails)

const newDetails = JSON.parse(stringnifiedDetails)
console.log(newDetails)

newDetails.car.color = "Blue";

console.log(details.car.color)
console.log(newDetails.car.color)


/// Another Example

const originalsObj = {
    name : "Zainab",
    age: 12,
    address:{
        local: "Agege wa",
        area: "Baba Yemi"
    }

     
}

const cloneObj = JSON.parse(JSON.stringify(originalsObj));

cloneObj.name = "Soliu"
cloneObj.age = 54
cloneObj.address.local = 'pegamut'
cloneObj.address.area = 'Mujayiduunu'

console.log(originalsObj)
console.log(cloneObj)








