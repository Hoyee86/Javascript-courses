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

    // PUSH METHOD

    // ARRAY-PUSH => The push method returns the new array length:
    // it add new element to the end of an arry

    const students = ["Yemi", "sola", "Grace", "Mary", "Femi", "Bola"]
    console.log(students);
    const pushed = students.push("Babe", "Rofiya", "Rhamat")
    console.log(pushed);
    console.log(students)



    // POP METHOD

    const numbers = [3, 4, 5, 6, 7, 8, 9];
    console.log(numbers)

    const popped = numbers.pop()
    console.log(popped);
    console.log(numbers)


   
    