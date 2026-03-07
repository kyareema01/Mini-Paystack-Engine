const {audit, highRollers, fraudSentry} = require('./processor')

const names = ['Bangis', 'Taufiq', 'Saad', 'Mujahid', 'Ibrahim', 'Chidi', 'Aminu', 'Olu', 'Fatima', 'Zainab'];
const statuses = ['success', 'success', 'success', 'failed', 'pending']; // More success than failures
const types = ['airtime', 'transfer', 'bill_payment', 'pos'];

const transactions = [];

function generateTransactions(count) {
  const now = Date.now();

  for (let i = 0; i < count; i++) {
    // cause I want some transactions to cluster (happen at almost the same time)
    // to test for "spamming" or "fraud"
    const randomTimeOffset = Math.floor(Math.random() * 3600000); // within the last hour

    transactions.push({
      // Base 36 uses all numbers (0-9) & letters (a-z). 
      // It turns decimal into a string... start from index 2-9
      id: `TRX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      customerName: names[Math.floor(Math.random() * names.length)],
      amount: Math.floor(Math.random() * 50000) + 100, // Between 100 and 50,000 Naira
      status: statuses[Math.floor(Math.random() * statuses.length)],
      type: types[Math.floor(Math.random() * types.length)],
      timestamp: now - randomTimeOffset,
      currency: "NGN"
    });
  }

  // Sorted them by time so they look like a real stream of data
  return transactions.sort((a, b) => a.timestamp - b.timestamp);
}

console.log('random math: ',Math.random().toString(30).substring(2,8))

const transactionHistory = generateTransactions(50);
console.log("Sample Transaction:", transactionHistory[0]);
console.log("All Transactions:", transactionHistory.length);
audit(transactions)
highRollers(transactions)
fraudSentry(transactions)

module.exports = transactionHistory;