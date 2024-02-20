  // Globa scope
const name = "Zainab";
const age = 17;
const school = "Agege primary school, Orile";


const one = () => {
    return `${name} of ${age} years attened ${school}`;
}

const answer = one()
console.log(answer)


const file = () => {
    return `${name} likes eating ${age} wraps of semo in ${school}`;
}

const sentence = file()
console.log(sentence)


// Local scope

const localscope = () => {
    const name = "oloye";
    const religion = "Muslim";
    const activity = "Drinking of Wine";
    
    return `${name} who is a ${religion} enjoys ${activity}`;
}


const oloye = localscope()
console.log(oloye)

