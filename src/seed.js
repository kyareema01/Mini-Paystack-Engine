const fs = require('fs')

const { generateTransactions } = require('./data.js')
const transactions = generateTransactions(50)

try {
  fs.writeFileSync('./data.json', JSON.stringify(transactions, null, 2))
} catch (err) {
  console.error('failed to write to the DB', err)
}