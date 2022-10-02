const {
    generateWordsOfGivenLength,
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
console.log(generateWordsOfGivenLength('garlic', 5))
beep()
