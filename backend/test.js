const {
    generateWordsOfGivenLength,
    getAllSubstringsOfCorrectLength,
    generateEnglishWords,
    permute,
    permuteN,
    generatePerms
} = require('./permute.js')
const beep = require('beepbeep')

// console.log('generatePerms:', generatePerms([1,2,3]))

// console.log('permuteN:')
// permuteN(4)

// console.log('permute: ')
// console.log(permute('abc'))

// console.log('generateEnglishWords: ')
// console.log(generateEnglishWords('gpeeld'))

console.log('generateWordsOfGivenLength:')
console.log(generateWordsOfGivenLength('enrsmo', 6))
console.log(generateWordsOfGivenLength('enrsmo', 5))
console.log(generateWordsOfGivenLength('enrsmo', 4))
console.log(generateWordsOfGivenLength('enrsmo', 3))


// const allSubstringsOfCorrectLength = getAllSubstringsOfCorrectLength('abbbef', 5)
// console.log('Number of substrings of correct length = ', allSubstringsOfCorrectLength.length)
// console.log('The substrings: ')
// console.log(allSubstringsOfCorrectLength)

beep()
