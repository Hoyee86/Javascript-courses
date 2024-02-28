//****** OBJECT : The objects are used to represent real life datas
//object is an unordered collection of related data in form of key and 
// value pairs

//******** Examples ******/
const firstName = "Soliu"

const person = {
    firstName,
    surname:   "Hayzed",
    age: 158,
    chhildren:
    {
        firstChild: "Eef",
        secondChild: "Nafisah"
    }
}

console.log(person)


//**** ASSESSING AND ADDING OF PROPERTIES TO AN OBJECT */

const human = {
    firstName: "Abdullahi",
    "DLT- africa location": "pegamut"
}

human.pet = {name:'cobra', age:3}
human.job = 'headmaster'
human.favFood = 'Garri'

console.log(human.firstName)
console.log(human.job)
console.log(human.favFood)
console.log(human["firstName"])
console.log(human["DLT- africa location"])

console.log(human)

// OBJECT BUILT IN METHOD: This is used to access and make 
// working with individual objects straightforward

const pet = {
    petName: "dog",
    petSound: () => {
        console.log("Woof! Woof!")
    }
}

console.log(pet.petName)

pet.petSound()

//**** Another Example */
const dog = {
    name: "fluffy",
    age: 2,
    listAllProperties: function(){
        console.log(this.name, this.age)
    }

}

dog.listAllProperties()


// Another Example

const myObject = {
    myMethod1: () => {}, // arrow function
    myMethod2: function () {}, //function declaration

};


const animal = {
    name: "fluffy Orange",
    age: 10,

    bark: () => {
        console.log("Woof Woof!")
    }
}

console.log(animal.name)
animal.bark()


//***** OBJECT methods  */
/// OBJECT.KEYS
/// OBJECT.VALUE
/// OBJECT.ENTRIES
/// OBJECT.FREEZEES
/// OBJECT.SEAL

const employees = {
        boss: "Soliu",
        secretary: "Azeez",
        sales: "Zainab",
        accountant: "Bola",
        cleaner: "Ade"
}


/// OBJECT.KEYS
const employeeInfo = Object.keys(employees)
console.log( employeeInfo)


/// another example

/// OBJECT.VALUE

const session = {
    id: 1,
    date: "27th-feb-2024",
    device: "Mobile",
    browser: "chrome"
}

const sessionValue = Object.values(session)
console.log(sessionValue)


/// OBJECT.ENTRIES
//******* Example */
const operatingSystem = {
    name: "Linux",
    version: 18.04,
    license: "Open source"
}

const newSystem = Object.entries(operatingSystem)
console.log(newSystem)



/// OBJECT.FREEZEES

// Example

const user = {
    username: "John",
    password: 12345,
}

const userInfo = Object.freeze(user)
console.log(userInfo )

userInfo.username = "soliu"
// console.log(userInfo)


/// OBJECT.SEAL

//***** Example */

const userOne ={
    userName: "Joseph",
    password: 12345
}



const userOneInfo = Object.seal(userOne)
userOneInfo.userName = "Az"
console.log(userOneInfo)



// Deleting and updating object properties

    let x
    let y
const perSon = {
      name: "Hayzed",
      age: 35,
      isAdmin: true,

      address: {
        street: "Oju-oore",
        city:   "Ota",
        state:  "Ogun"
      },

      hobbies: ["Music", "Sport"]

}


// accessing an array inside an object


x = perSon.hobbies[0]
y = perSon.hobbies[1]
// let y = perSon["hobbies"][1]
console.log(x, y)


// updating a property

perSon.name = "Bode"
console.log(perSon)


perSon.address.street = "Oju-Elegba, ijebo-Ode"
console.log(perSon)


// Delete a property

delete perSon.address.state
console.log(perSon)


// adding a function to an object

perSon.greet = function() {
    console.log(`Hello, my name is ${this.name}`)
}

perSon.greet()

// Value and Reference: these are  divided into two namely
// copying primitive value

//copying numbers
let x1 = 1
let y1 = x1;

x1 = 2

console.log(x1)
console.log(y1)


// copy string

let firstPerson = "Mark"
let secondPerson = firstPerson

firstPerson = "Austin"

console.log(firstPerson)
console.log(secondPerson)


// copying complex valy(Non-primitive data): under is we have
// object, array, daye.

const animals = ["dogs", "cats"];
const otherAnimals = animals

animals.push("Goat");
console.log(animals)
console.log(otherAnimals)


// copying object

const data = {
    firstName: "Zainab",
    lastNmae:  "Abdullahi",  
}
const otherData = data;
console.log(data === otherData)

// EQUALITY

const person1 = {
    firstName: "Soliu"
}

const otherPerson1 = {
    firstName: "Soliu"
}

console.log(person1 !== otherPerson1) // false

const otherPerson3 = person1
console.log(person1 !== otherPerson3)