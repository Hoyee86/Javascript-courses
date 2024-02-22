const cohorts = [
    "Soliu", 
    "Abdullahi", 
    "Hayzed", 
    "Bode", 
    "sir kenny", 
    "Basheera", 
    "Br. Tunmise", 
    "Captain",]
    console.log(cohorts)


    const replaceEl = (cohorts[1] = "Tolu")
    
// To add another element in the array
    cohorts[8] = "Bimpe"




    // class-work (loop for cohort)

    // ES5

    for (let i = 0; i < cohorts.length; i++) {
        console.log(i, cohorts[i])
    }

    // ES6

    for(const hoye of cohorts) {
          console.log(hoye);
    }


    const nested = [[1,2], [3,4], [5,6]]
    const newArray = nested[0]
    console.log(newArray);



    const object = {
         name : "John",
         age : 60,
    }

    console.log(object)


    const arr = [
        "Banana",
        10000,
        {
            name : "Bola blu",
            age : 80
        },

        function name () {
            alert("boooooooooooooooooooo")
        }
    ]

    console.log(typeof arr)

    // ************PUSH METHOD*************/

    // ARRAY-PUSH => The push method returns the new array length:
    // it add new element to the end of an array

    const students = ["Yemi", "sola", "Grace", "Mary", "Femi", "Bola"]
    console.log(students);
    const pushed = students.push("Babe", "Rofiya", "Rhamat")
    console.log(pushed);
    console.log(students)



    // POP METHOD : This method is used to remove last data from an array

    const numbers = [3, 4, 5, 6, 7, 8, 9];
    console.log(numbers)

    const popped = numbers.pop()
    console.log(popped);
    console.log(numbers)

    //***** MAP METHOD**************
    const  number = [1, 2, 3, 4, 5, 6];
    console.log(number)
    const numberDuble = number.map(double)
    const numberMuitiply = number.map(multiply)

    function double(value, index, array) {
        return value * 2
    }

    function multiply(value, index, array) {
        return value * index
    }

    console.log(numberDuble)
    console.log(numberMuitiply)


     //***** SHIFT METHOD () ************** : This is used to remove first
     // element of the an array

     const colors = ["Violent", "Red", "Blue", "Black"]
     console.log(colors)
     const shift = colors.shift()
     console.log(colors)
    
    //***** UNSHIFT METHOD () ************** : This is used to add
    //  to the first element of an array


    const months = ["March", "July", "september", "January"];
    console.log(months)
    const newMonths = months.unshift("Febuary")
    console.log(newMonths)
    console.log(months)


    //***** SPLICE METHOD () ************** : This array method is used to 
    // new element to an array with an index position and it also helps to
    // remove element from an array.   

    const countries = ["Kenya", "Malaysia", "Canada", "Qatar", "Nigeria"];
    console.log(countries)
    countries.splice(3, 2, "Egypt", "Ghana", "Morroco")
    console.log(countries)


    const wears = ["Gucci", "Versace", "D&G", "Nike", "LV"]
    console.log(wears)
    wears.splice(3,)
    console.log(wears)


    const drinks = ["coke", "viju", "Gin", "Exotic", "Bobo"]
    console.log(drinks)
    drinks.splice(2,1)
    console.log(drinks)


    //***** SLICE METHOD () ************** : This method returns selected elements in an array
    // as new array, and it  does not change the original array 


    const men = ["Tunmise", "Kenny", "Soliu", "Bode", "Abee", "Hayzed"]
    console.log(men)
    

    const newString = "Naheem"
    console.log(newString.length)
    const newSlice = newString.slice(2,5)
    console.log(newSlice)


    const baddestMen = men.slice(2, 5)
    console.log(baddestMen)


    const coolestAmong = men.slice(4)
    console.log(coolestAmong)


 //***** INCLUDE METHOD () ************** 


 const checkMen = men.includes("Abee")
 console.log(checkMen)

 const checkMEN = men.includes("Bash")
 console.log(checkMEN)

  //***** SORT METHOD () ************** : This method is used to re-arra
  // nge element in an array with the help of call back function
  // () => both ascending and descending orders.

  men.sort();
  console.log(men)


  const alpha = ["G", "F", "K", "A", "B", "Z"];
  console.log(alpha)

  alpha.sort();
  console.log(alpha)


  const numbs = [9, 7, 6, 8, 15, 25, 35, 99, 5, 1, 3, 2, 4]
  console.log(numbs)

  numbs.sort((a, b) => a-b);
  numbs.sort((a, b) => b-a);
  console.log(numbs)


    //***** indexOf METHOD () ************** :


    const $number = [1, 4, 3, 7, 2, 9, 8, 2, 4, 7, 5, 2]
    console.log($number)

    const index1 = $number.indexOf(2)
    console.log(index1)


    const tutor = ["Abdullahi", "Naheem", "Anate", "Seyi", "Soliu"]
    console.log(tutor)
    const indexTt = tutor.indexOf("Anate")
    console.log(indexTt)

    const lastIndex = $number.lastIndexOf(2)
    console.log(lastIndex)




//***** LOOP () ************** :

const _names = ['Zainab', 'Baheera', 'Nafeesat'];

//***** ES5 */

for(let i = 0; i < _names.length; i++) {
    console.log(i, _names[i])
};


//****** ES6 */

for(const _name of _names) {
    console.log(_name)
}


//***** FOREACH METHOD () ************** :

_names.forEach(function(){});

_names.forEach((name, i, arr) => {
console.log(name.toUpperCase())
console.log(i)
console.log(arr)
});

let _$numbers = [2, 4, 3, 1, 2, 4];

_$numbers.forEach(function(number, i){
    console.log(number)
});


const mammals = ["Lion", "Cow", "Dog", "Cat"];
mammals.forEach((mammals, i)=> console.log(mammals, i));


// EXAMPLE 3

let totalVal = 0;
const trans = [42, 45, 26, 4, 13, 16]

trans.forEach((tran)=>{
    console.log(totalVal, (tran += totalVal), )
})















