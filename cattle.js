
const { database } = require("./database.js")

const roundup = (cattleToDrive) => {
    let cattle = []
    const types = database.cattleTypes
    const herdSize = cattleToDrive

    for (let counter = 0; counter < herdSize; counter++) { 
        const randomType = Math.floor(Math.random() * types.length)
        cattle.push(types[randomType])
        
    }

    return cattle
}

module.exports = { roundup }