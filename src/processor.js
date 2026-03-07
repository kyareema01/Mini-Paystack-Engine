function audit(transactions) {

  let initialState = {
    totalVolume: 0,
    statusCounts: {success: 0, failed: 0, pending: 0}
  }

  let report = transactions.reduce((acc, trx) => {
    // acc(initialState), the obj after (,) , trx(transactions) 
    acc.statusCounts[trx.status] = (acc.statusCounts[trx.status] || 0) + 1

    if (trx.status === 'success') {
      acc.totalVolume += trx.amount
    }

    return acc
  }, initialState)

  let totalTrx = transactions.length
  let failedTrx = report.statusCounts.failed
  // create a key-val in the report obj
  report.failureRate = ((totalTrx / failedTrx) * 100).toFixed(2) + '%'

  console.log('Final Audit: ', report)
  return report
}

function highRollers(trx) {
  let filtered;

    filtered = trx.filter((item) => (
      item.amount >= 20000 && item.status === 'success'
    ))
  ;

  console.log('all successful transfers above 20,000 Naira.', filtered.length)
  return filtered
}

function fraudSentry(transactions) {
  let i;
  let timeDiff

  for (i = 1; i < transactions.length; i++) {
    let current = transactions[i]
    let previous = transactions[i - 1]

    timeDiff = current.timestamp - previous.timestamp

    if (
      current.customerName === previous.customerName &&
      timeDiff < 5000
    ) {
      console.log('possible spam detected')
      console.log(transactions[i - 1])
      console.log(transactions[i])
    }
  }
}

module.exports = {
  audit,
  highRollers,
  fraudSentry
}