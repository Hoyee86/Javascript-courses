     // IF Statement
//         const age = 18 

//         const bianca = 20

//    if (bianca > age){
//       console.log("You are granted Admission")

// }else if(bianca === age){
//     console.log("your admission have been postponed till next year")
// }else{
//     console.log("wait till you are above 18")
// }



//Truth and Falsy Values



//Falsy values
// false
// ""
// 0
// null
// undefined
// NaN

// if(true){
//     console.log('truthy value')
// }






// const password = "rapp"
// const email = "y"

// if (password && email){
//     console.log("Login Approved")
// }else if(password || email){
//     console.log("password and email must be provided")
// }else{
//     console.log("unapproved")
// }


// class work

// create good morning message if the time is less than 10:00am
//if not, but the time is less than 20:00am, create  good day message, otherwise good evening

// let time = 10

// if(time < 10){
//     console.log("Good morning")
// }else if (time < 20){
//     console.log("Good day")
// }else{
//     console.log("Good Evening")
// }


// const times = "Good morning"

// if(!times){
//     console.log("good afternoon")
// }else {
//     console.log("Good morning")
// }

 //Examples


 let temperature = 25;
 if(temperature > 30) {
         console.log("it is a hot day")
 }else{
    console.log("it is not too hot today")
 }


//  let hour = new Date () .getHours();
//  if(hour < 12){
//       console.log("Good morning")
//  }  else if(hour >= 12 && hour < 18){
//      console.log("Good afternoo")
//  }else{
//     console.log("Good evening")
//  }



 //class

//  let hour = new Date () .getHours();
//  if(hour < 11){
//     console.log("Breaking times")
//  }else if(hour >= 11 && hour < 13){
//     console.log("class time")
//  }else if(hour >= 11 && hour )


// let score = 85;

//  if(score >= 90){
//     console.log("Excellent you score an A")
//  }else if (score >= 80){
//     console.log("Well done! you score B")
//  }else if(score >=70){
//     console.log("Good job! you score a C")
//  }else if(score >=60){
//     console.log("you pass! you score a D")
//  }else{
//     console.log("sorry failed. you score F")
//  }


/// SWITCH STATEMENT


let supperHero =" captain America"

switch(supperHero){
     case 'iron man':
        console.log("i am an iron man")
        break;
        case 'thor': 
        console.log("Tht is my hammer!")
        break;
      case 'captain America':
        console.log("Never give up!")
        break;
      case 'Black Widow': 
      console.log("One short, one kill!") 
      break;
      default:
         console.log("Enter a valid superHero Name")
}

// console.log(supperHero)


let day = new Date() .getDay();
console.log(day)
let dayName;
switch (day) {
    case 0:
        dayName = "Sunday"
        break;
    case 1:
        dayName = "Monday"
        break;
    case 2:
        dayName = "Tuesday"
        break;
    case 3:
        dayName = "Wednesday"
        break;
    case 4:
        dayName = "Thursday"
        break;
    case 5:
        dayName = "Friday"
        break;
    case 6:
        dayName = "Saturday"
        break;
        
        default:
        dayName = "Unknown"
}

console.log("Today is " + dayName)


//Class work

let fruit = "Apple"
let message;

 switch(fruit){
    case "Apple":
        message = "Apple are crunch and delicious";
        break;

        case "Banana":
        message = "Banana are sweet and nutritious";
        break;

        case "Orange":
        message = "Orange are juicy  and packed with vitamin";
        break;

        case "Grape":
        message = "Apple are crunch and delicious";
        break;
        
        default:
            message ="sorry we dont have information about"
 }

 console.log(message)


 // TERNARY OPERATOR


 const oldMan = 80

if(oldMan >= 80){
    console.log("you can drive")
}else{
    console.log("you may not drive")
}


oldMan >= 80? console.log("you can drive") : console.log("you may not be drive");

// ANOTHER EXMAPLE

let age = 20;

let canVote = age >= 18 ? "YES you can vote!": age === 18 ? "you match the condition": "NO you cant vote"
console.log(canVote)




// LOOP
//while loop

// let i = 0;

// while(i < 10){
//     console.log(i)
    //    i++
// }





// for Loop


// for ([initialization];  [Condition]; [final-expression])
//statement

//}

  for(let i = 0; i < 10; i++){
    console.log(i)
  }



  for(let i = 1; i<= 8; i++){
    console.log(i)
  }


  const colors = ['red', "green", "blue", "yellow", "black"];
    // console.log(colors)

  for(let i = 0; i < colors.length; i++){
    console.log(colors[i])
  }














