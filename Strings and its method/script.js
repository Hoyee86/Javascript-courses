// Types of strings

// single qoute ('')
const world = 'i am a boy'

// double qoute ("")
const words = "i am a boy"

// backticks (``)
const worlds = `i am a boy`


// // console.log(world, words, world)


// const age = 12
// const school = 'DLT'
// const name = 'Eef'


// const sentence = `my name is ${name}, i am ${age} years old I go to ${school} school`
// console.log(sentence)


const math = "2 + 2"

const mathematics = `${2+ 2}`

const line = `1
2
3
4
5`

console.log(line)


const numerals = `Hello I'm Abdullahi and I am from "Osun state"`
console.log(numerals)


// checking the length of a string

const name = "Hayzed"

console.log(name.length)

console.log(name[0])


// changing the case of string

const word = "i am a boy"
const worLd = "SHE IS A GIRL "

console.log(word.toUpperCase())
console.log(world.toLowerCase())

// checking for Substring

const man = "I love coding and my favourite language is Javascript"


const caps = man[31].toUpperCase()
console.log(caps)

const final = man.indexOf('Javascript')
console.log(final)

 const check = man.includes('favourite')
 console.log(check)


 const starting = man.startsWith('I')
 console.log(starting)

 const ending = man.endsWith('t')
 console.log(ending)

 // Getting a substring and the method is slice method

 const exampleString = 'hotdog'
 console.log(exampleString.slice(0, 3))
 console.log(exampleString.slice(3))
 console.log(exampleString.slice(-1))
 console.log(exampleString.slice(0, 2))
 console.log(exampleString.slice())


 // SPLIT METHOD

 const sentence1 = "The quick brown for jumped over the lasy dog";
 console.log(sentence1.split(' '));


 const name42 = "Nofisat and Zainab";
 const split11 = name42.split(' ')
 console.log(split11)


 // REVERSE () AND JOIN () METHOD

 const name4 = "Nofisat and Zainab";
 const split1 = name4.split(' ')
//  console.log(split1)

 const reverse$ = split1.reverse()
 console.log(reverse$);


 const join1 = reverse$.join('-')
 console.log(join1)

 // REPEAT () METHOD

 const dogSay = "Woof "
 console.log(dogSay.repeat(2))


 // TRIM() METHOD => the trim () method removes whitespace from both sides of a string

 const trim = "  @example.com "
 console.log(trim.trim())








