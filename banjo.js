// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

const isbanjo = (name) => {
    const nameCap = name.charAt(0);
    const bJPalya = nameCap.toUpperCase();
    const restName = name.slice(1)
    return bJPalya == "R"? bJPalya + restName + " plays banjo" : bJPalya + restName + " does not play banjo";
}


const iam = 'Bravo';

console.log(isbanjo(iam));