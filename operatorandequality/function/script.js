  // function declaration

  function square(number) { // parameter is passed in the parenthesis
         // statement
  }

  square() // function call/ invocation


  // Function Expression

   const nameFunction = function(params) {}


   // Arrow Function

   const arrowFn = () => {}



   function sayHello(firstName){
        console.log(`Hello ${firstName}`)
 }
 
 sayHello ('Hayzed')
 sayHello ('Class captain')
 sayHello ('Abdullahi')



 const division = (number) => {
    return number / number;
 }
 


 const answer = division(4)
 console.log(answer)

 const squre2 = number => {return number * number}
 const squre3 = number => number * number



 function add(number) {
    return number + number
 }

const sum = add(2)
console.log(sum)


const subtraction = (a, b) =>{
    return a-b
}

const hoyee = subtraction(8, 4)
console.log(hoyee)



/// NESTED FUNCTION
    function getScore() {
    const num1 = 2;
    const num2 = 3;
    const name = "Nafisat"

    function add(){
        return `${name} is ${num1 + num2} years old`
    }
    return add()
}
console.log(getScore())





 const nestedFunction = (a, b, c,) => {
     const anotherFunction = () => {
         return `${a + b + c}`};
   
     return anotherFunction();
 }
console.log(nestedFunction(2, 4, 6))


// Class work


function addNumber(a, b) {
    return a + b >= 10 ? "sum is greater than or equal to 10" : a + b;
}

const greater = addNumber(9, 10);
console.log(greater)

const lesser = addNumber(3, 4);
console.log(lesser)

// check for even number

const isEven = (nestedGame) => {
    return nestedGame % 2 === 0 ? true : false;
}


const even = isEven(6);
console.log(even)

const odd = isEven(7);
console.log(odd)


// check for prime

function isPrime(number){
    if(number <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === o)  {
            return false;
        }
    }
    return true;
}

const prime = isPrime(3)
console.log(prime)








    












 


 