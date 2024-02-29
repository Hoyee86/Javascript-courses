///***** class Exercise */

function rectArea(length, breadth){
    return length * breadth

}

const answer = rectArea (4, 5)
console.log(answer)

// Object Literl method: 
let person = {
    first_name : "Salman",
    last_name :  "Kofoshi",

    getFunction : function() { //method --> a property whose value is a function
        return `my name is ${person.first_name} ${person.last_name}`
    },

    phoneNumber : {
        mobile  : "12345",
        lamdline : "6789"
    }
}

console.log(person.getFunction())
console.log(person.phoneNumber.lamdline)


/****** Object Constructor Method: */

function personTwo(first_name, last_name) {
    this.first_name = first_name,
    this.last_name =  last_name
}
 
let person1 =  new personTwo("Hayzed", "Mabululu")
let person2 =  new personTwo("Azeez", "Abdullahi")
   console.log(person1)
   console.log(person2)


   //****** THE NEW KEYWORD: This create a new empty objects

   const student = {} // simple object

   const studentTwo = new  Object()
   studentTwo.firstName = "Eef"
   console.log(studentTwo)


   const arr = [1, 2, 3];
   const newArr = new Array(1, 2, 3)
   console.log(arr, newArr)

   // Date
   const myBaiday = new Date()
   console.log(myBaiday)

   const myNumber = new Number(100.00)
   console.log(myNumber.toFixed(0))

   // THIS keyword
   function Sentence(words){ // constructor function syntax
      this.words = words
      console.log(this)
   }

   const $ = new Sentence(`Hello there! We're learning about this keyword`)

   // another example
    
   function Car(color, brand, whells, id) {
         this.color = color;
         this.brand = brand;
         this.wheels = whells;
         this.id = id;

         console.log(this)
   }


   const blueCar = new Car("Blue", "BMW", 4, "🚗")

   const redCar = new Car("red", "ferrari", 4, "🚘")


   //***** class-exercise */ create a cohort function with params(name, age, favFood, phoneNo, baiday), create new
   // instances for three differents cohorts, log the param argument onto the console--> baiday should be a new date 
   // instance

   //***** Solution */
    function Cohort(name, age, favFood, phoneNo, baiday){
        this.name = name;
        this.age = age;
        this.favFood = favFood;
        this.phoneNo = phoneNo;
        this.baiday = baiday;

        console.log(this)
    }

    const cohortsInfo = new Cohort("Abdullahi", 25, "Semovita", 1234, new Date("29, feb, 2024") )
    const cohortsInfo1 = new Cohort("Soliu", 25, "Rice", 706020, new Date("29, feb, 2024") )
    const cohortsInfo3 = new Cohort("Kenny", 25, "Eba", 703386, new Date("29, feb, 2024") )


    // CLASS KEYWORD: A class is a schema for an object is a schema for an object that can safe many values

    // class declaration

    class Shape1{
       constructor(width, height) {
           this.width = width;
           this.height = height;
           console.log(this)
       }
    }

    const area = new Shape1(10, 2)


    // Class E xpression

    // i --> Anonymous

    const Shape = class{
        constructor(width, height) {
            this.width = width;
            this.height = height;

            console.log(this)
        }
    }
    const area1 = new Shape1(10, 2)



    // ii --> Unanonymous

    const BigBoy = class Bigie{
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        // getter function
        get him() {
            return this.coder()
        }

        // method
        coder() {
            return{name: this.name, age: this.age}
        }
    }

    const instance = new BigBoy("Paiko", 40)
    console.log(instance.him)

    // another example

    const School = class Academy {
        constructor(name, location) {
            this.name = name;
            this.location = location;
        }

        get principal() {
            return this.seniorBoy()
        }

        seniorBoy() {
            return {name: this.name, location: this.location}
        }
    }

    const headMaster = new School("Hayzed", "Pegamut")
    console.log(headMaster.principal)



    // class-work

    // with an unanonymous class function named RectShape, create a constructor with params of length and breadthe, get the area of a rectangle
    // using getter function and calculate method, create a new instance for the RectShape with its relative argument..


    // SOLUTION
     
    const RectShape = class Rectangle {
        constructor(length, breadth) {
            this.length = length;
            this.breadth = breadth;
        }
        get area() {
            return this.calc()
        }
        calc(){
            return {area: this.length  *  this.breadth}
        }
    }

    const square = new RectShape(25, 15)
    console.log(square.area)


    // difference between const and class

    // detailOne = {
    //       name: "Class Captain",
    //       age: 540,
    //       isBlack: false
    // }
    // detailTwo = {
    //       name: "Bbab Oloye",
    //       age: 640,
    //       isBlack: true
    // }

    // const getDetailsOne = new detailOne()
    // console.log(getDetailsOne)

    class Detail{
        constructor(name, age, isPretty){
             this.name = name;
             this.age = age;
             this.isPretty = isPretty;
        }
    }

    const detailOne = new Detail("Bash", 12, false)

    const detailTwo = new Detail("Nafi", 10, false)

    const detailThree = new Detail("Bode", 2, false) 

    const result = [detailOne, detailTwo]
    result.push(detailThree)
    result.shift(detailOne)
    console.log(result)



    // another example

    const createPerson = (name, age, isHand) => {
         const userSchema = {
            name, age, isHand
         }
         return userSchema
    }

    const personCreate = createPerson("Bode", 45, true)

    const personCreate2 = createPerson("Soliu", 450, true)

    console.log(personCreate)
    console.log(personCreate2)


    // INHERITANCE

    class Animal {
        alive = true

        isBeautiful = 'This animal is beautiful'

        eat() {
            console.log(`This ${this.name} can eat`)
        }
         sleep() {
            console.log(`This ${this.name} can sleep`)
        }

    }


    class Rabbit extends Animal {
         name = "Rabbit"

         run() {
            console.log(`This ${this.name} can run`)
         }
        
    }
    class Goat extends Animal {
        name = "goat"
    }

    const rabbit = new Rabbit ()
    rabbit.eat()
    console.log(rabbit)



    const goat = new Goat()
    goat.eat()
    console.log(goat.isbeautiful)
    console.log(goat)
    
