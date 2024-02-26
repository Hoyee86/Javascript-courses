//****** OBJECT : The objects are used to represent real life datas
//object is an unordered collection of related data in form of key and 
// value pairs

//******** Examples ******/
// const firstName = "Soliu"

// const person = {
//     firstName,
//     surname:   "Hayzed",
//     age: 158,
//     chhildren:
//     {
//         firstChild: "Eef",
//         secondChild: "Nafisah"
//     }
// }

// console.log(person)


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

// OBJECT BUILT IN METHOD

const pet = {
    petName: "dog",
    petSound: () => {
        console.log("Woof! Woof!")
    }
}

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