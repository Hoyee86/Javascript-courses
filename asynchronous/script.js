 
 // This is the syntax for setInterval function
//  const intervai=setInterval(() => console.log("Hello world"), 1000)
//  clearInterval(interval)

const myInterval = setTimeout(() =>  console.log("Hellow world"), 1000); // This delay the execution of the code till after 10000


// Synchrounous- Javascript: code execution occurs line-by-line and the tasks are completed without delay

const functionOne = () => {
     console.log("function One")

     functionTwo();
     console.log("functionOne, part2")
}


const functionTwo = () => {
   setTimeout(() => console.log("function Two"), 2000)
}


functionOne()


// CALL BACK: FETCHING DATA


// const fetchUser = (username) => {
//    setTimeout(() => {
//       return{user: username}
//    }, 2000);
// }

// const user = fetchUser("test")
// console.log(user)



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

const fetchUserTwo = (username, callback) => {
      setTimeout(() => {
        console.log("Now have the user")
        callback({username})
      }, 2000);
}


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

const user3 = fetchUserTwo("Michael", (user) =>{
    console.log(`Your name is: ${user.username}`)

    fetchUserPhotos(user.username, (userPhoto) =>{
        console.log(`You photos are: ${userPhoto}`)

        fetchUserPhotosDetails(userPhoto[0], (detail) => {
            console.log(`Your photo details are: ${detail}`)
        });

    });

});



// This is called callback Hell. it becomes unbearable


const user4 = fetchUserTwo("Michael", (user) => {
    fetchUserPhotos(user.username, (userPhoto) => {
        fetchUserPhotosDetails(userPhoto[0], (detail) => {
            fetchUserPhotosDetails(userPhoto[0], (detail) => {
                fetchUserPhotosDetails(userPhoto[0], (detail) => {
                    fetchUserPhotosDetails(userPhoto[0], (detail) => {
                        console.log(detail)
                    });
                });
            });
        });
    });
});



// PROMISE:

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Now we are in promise");

        resolve({username: "Bode"})
        // reject("User not found")
    }, 5000);
})

promise
.then((user) => console.log(user.username))
.catch((error) => console.log(error))


const fetchUser = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("We are using promise")
            
            resolve(username)
        }, 4000);
    })
}


const fetchUserPhotos = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("We have the photo")

            resolve(["photo1", "photo2"])
        }, 4000);
    })
}

const fetchUserPhotosDetails = (photo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the photos details")

            resolve(detail)
        }, 4000);
    })
}


fetchUser("Zainab")
.then((user) => fetchUserPhotos(user))
.then((photo) => fetchUserPhotos(photo[0]))
.then((detail) => console.log(detail))


    



    

    