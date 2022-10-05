const checkWord = require('check-word')
const checkEnglishWord = checkWord('en')

const generateWordsOfGivenLength = (charString, lth) => {
    if (charString.length === lth) {
        return generateEnglishWords(charString)
    }

    const uniqueCorrectLengthSubstrings = getAllSubstringsOfCorrectLength(charString, lth)
    let validWordsOfGivenLength = uniqueCorrectLengthSubstrings.filter(word => {
        return checkEnglishWord.check(word)
    })
    return validWordsOfGivenLength
}

const getAllSubstrings = (str) => {
    var i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}

const getAllSubstringsOfCorrectLength = (str, lth) => {
    const allStrPerms = permute(str)
    const allSubstringsOfCorrectLength = allStrPerms.map(stringPerm => stringPerm.substring(0,lth))
    return [...new Set(allSubstringsOfCorrectLength)]
}

const generateEnglishWords = (charString) => {
    let allCharPerms = permute(charString)
    allCharPerms = [...new Set(allCharPerms)]
    const validEnglishWords = allCharPerms.filter(word => {
        return checkEnglishWord.check(word)
    })
    return validEnglishWords
}

const permute = (charString) => {
    const positionPerms = permuteN(charString.length)
    const stringPerms = positionPerms.map(perm => {
        const permutedCharArr =  perm.map(num => charString[num])
        return permutedCharArr.join('')
    })
    return stringPerms
}

// Input - integer n
// Output - array or arrays - each array is a permutation of 0,1,2,...,n
const permuteN = (n) => {
    try {
        const zeroToNArray = [...Array(Number(n)).keys()]
        return generatePerms(zeroToNArray)
    } catch (err) {
        console.error('Error in permuteN: ', err)
    }
}

// Input - integer array
// Output - array of arrays - each array is a permutation of the input array
const generatePerms = (intArr) => {
    if (intArr.length === 2) {
        const permsToReturn = [
            [intArr[0], intArr[1]],
            [intArr[1], intArr[0]]
        ]
        return permsToReturn
    }
    let perms = []
    for (let i = 0; i < intArr.length; ++i) {
        let copyOfInput = [...intArr]
        copyOfInput.splice(i,1)
        let permsOfSubArr = generatePerms(copyOfInput)
        let permsForChosenStarter = permsOfSubArr.map(perm => {
            perm.unshift(intArr[i])
            return perm
        })
        perms = perms.concat(permsForChosenStarter)
    }
    return perms
}

module.exports = {
    generateWordsOfGivenLength,
    getAllSubstringsOfCorrectLength,
    generateEnglishWords,
    permute,
    permuteN,
    generatePerms
}
