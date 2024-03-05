 
 // This is the syntax for setInterval function
//  const intervai=setInterval(() => console.log("Hello world"), 1000)
//  clearInterval(interval)

// const myInterval = setTimeout(() =>  console.log("Hellow world"), 1000); // This delay the execution of the code till after 10000


// Synchrounous- Javascript: code execution occurs line-by-line and the tasks are completed without delay

// const functionOne = () => {
//      console.log("function One")

//      functionTwo();
//      console.log("You are a competent tutor")
// }


// const functionTwo = () => {
//    setTimeout(() => console.log("function Two"), 2000)
// }


// functionOne()


// CALL BACK: FETCHING DATA


// const fetchUser = (username) => {
//    setTimeout(() => {
//       return{user: username}
//    }, 2000);
// }

// const user = fetchUser("test")
// console.log(user)


// //****** Example Two by using Callback function */



// const fetchUserOne = (name, callback) => {
//     setTimeout(() => {
//         console.log("Now we have the user")
//         callback({user: name})
//     }, 2000);
// }



// const user2 = fetchUserOne("Abdullahi", (user2) => {
//     console.log(user2)
// })


// callback Hell:

// const fetchUserTwo = (username, callback) => {
//       setTimeout(() => {
//         console.log("Now have the user")
//         callback({username})
//       }, 2000);
// }


// const fetchUserPhotos = (username, callback) => {
//      setTimeout(() => {
//          console.log(`Now we have the photos for ${username}`)
//          callback(["photo1", "photo2"])
//      }, 2000);
// }



// const fetchUserPhotosDetails = (photo, callback) => {
//       setTimeout(() => {
//          console.log(`Now have the photo details ${photo}`)
//          callback("detail")
//       }, 2000);
// }

// const user3 = fetchUserTwo("Michael", (hoyee) =>{
//     console.log(`Your name is ${hoyee.username}`)

//     fetchUserPhotos(hoyee.username, (userPhoto) =>{
//         console.log(`You photos are: ${userPhoto}`)

//         fetchUserPhotosDetails(userPhoto[0], (detail) => {
//             console.log(`Your photo details are: ${detail}`)
//         });

//     });

// });



// This is called callback Hell. it becomes unbearable


// const user4 = fetchUserTwo("Michael", (user) => {
//     fetchUserPhotos(user.username, (userPhoto) => {
//         fetchUserPhotosDetails(userPhoto[0], (detail) => {
//             fetchUserPhotosDetails(userPhoto[0], (detail) => {
//                 fetchUserPhotosDetails(userPhoto[0], (detail) => {
//                     fetchUserPhotosDetails(userPhoto[0], (detail) => {
//                         console.log(detail)
//                     });
//                 });
//             });
//         });
//     });
// });



// PROMISE(): This method takes a callback function as an argument and executes the callback function
// function when the promise is resolved or reject and it two keywords
// which .then() and .catch() methods that are used for success and error 
// message.

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Now we are in promise");

//         resolve({username: "Bode"})
//         // reject("User not found")
//     }, 5000);
// })

// promise
// .then((user) => console.log(user.username))
// .catch((error) => console.log(error))


// const fetchUser = (username) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("We are using promise")
            
//             resolve(username)
//         }, 4000);
//     })
// }


// const fetchUserPhotos = (username) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("We have the photo")

//             resolve(["photo1", "photo2"])
//         }, 4000);
//     })
// }

// const fetchUserPhotosDetails = (photo) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Now we have the photos details")

//             resolve(detail)
//         }, 4000);
//     })
// }


// fetchUser("Zainab")
// .then((user) => fetchUserPhotos(user))
// .then((photo) => fetchUserPhotos(photo[0]))
// .then((detail) => console.log(detail))



// Async and Await 

const myUsers = {
   userList: []
}


// const myFoolFunc = async () => {
//  const response = await fetch('https://jsonplaceholder.typicode.com/users');
//  const fetchJson = await response.json()
//  console.log(fetchJson)
// }

// const anotherFunc = async () => {
//     const data = await myFoolFunc() 
//     myUsers.userList = data
//     console.log(myUsers.userList)
// }

// myFoolFunc()



//**** Example 2 */


// const getAllUsersEmail = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const fetchJson = await response.json()
//     console.log(fetchJson)

//     const soliu = fetchJson.map((user) => {
//         return user.email
//     })
//     console.log(soliu)

//    }


//    getAllUsersEmail()


const getAllUsername = async () => {
     const response = await fetch('https://jsonplaceholder.typicode.com/users');
     const fetchJson = await response.json()
     console.log(fetchJson)

     const username = fetchJson.map((user) => {

     })
    
 
}


   try{

   }catch (err){

   }finally {

   }


   /// Example


   const getData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            return data
        }catch (error) {
            console.log("Error:", error.message)
        }
   }

   getData()

   .then((data) => console.log("data:", data)).catch((error) => console.log("Error:", error.message))



   // Another Example


   const fetchDataWithErr = async () => {
       try {
           console.log("Fetching Data...")

           const res = await fetch("'https://jsonplaceholder.typicode.com/invalid-url")

           if(!res.ok) {
              throw new Error('Failed to fetch data ori-e-baje')
           }
           const $data = await res.json();
           return $data

       }catch (error) {
        console.log("Error:", error.message)
       }
   }

   fetchDataWithErr()
   .then(result => {
    if(result) {
        console.log("Data", result)
    }
   })



//    const getName = async () => {
//       const dell = await fetch('https://jsonplaceholder.typicode.com/users')
//       if()
//    }


const fetchSingleData = async () => {
     try{
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          if(!response.ok) {
            throw new Error ('not found will fixed soon')
          }

          const [userData] = await response.json()
          const {username, email, name} = userData;
          return {username, email, name};

     }catch (error) {
        console.log("Error:", error.message)
     }
}

fetchSingleData().then(({username, email, name}) => {
    console.log("Username", username)
    console.log("Email", email)
    console.log("Name", name)
})


//*** Exercise */


const fetchAllData = async () => {
    try{
          const result = await fetch('https://jsonplaceholder.typicode.com/users')
          if(!result.ok) {
            throw new Error ('Not found will fixed soon')
          }

          const userData = await result.json()
          const mappedData = userData.map(({username, email, name}) => {
            return {username, email, name}
          })
          console.log(mappedData)

    }catch (error) {
       console.log("Error:", error .message)
    }
}

fetchAllData();





const fetchNestDta = async () => {

    try{
        console.log("username")
   const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    
    if(!response.ok){
        throw new Error("Not found will fixed soon")
    }
    const userData = await response.json() 
    const mappedData = userData.map(({ id, username,email, name,address, phone, website, company}) =>({
    id, username, email, name, address: {
        street: address.street,
    },
    phone, website, company: {
        name: company.name
    }
        
}));
console.log(mappedData)
    }catch (error){
        console.log("error:",error.message)
}   
}
    fetchNestDta()


    //****** Another Method */


    const fetchAlluserData = async () => {
        try{
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
          if(!response.ok) {
            throw new Error('Not found, will fixed soon')
          }
          
          const userData = await response.json() // assuming data is an array of user
          const mappedData = userData.map(({username, email, name, address, company}) => {
            address = address['street'];
            company = company['name']
          return {username, email, name, address, company}
          })
          console.log(mappedData)
          
        }catch (error) {
          console.log('Error:', error.message)
        }
      }
      fetchAlluserData();


   





    



    

    