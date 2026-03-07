const http = require('http');
const transactions = require('./data');
const {audit, highRollers} = require('./processor');
const port = 3000

const server = http.createServer((req, res) => {
  const sendJSON = (data) => {
    res.writeHead(200, { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
     });
    res.end(
      JSON.stringify(data)
    )
  }

  if (req.url === '/api/audit' && req.method === 'GET') {
    const report = audit(transactions)
    sendJSON(report)
  }

  else if (req.url === '/api/highrollers' && req.method === 'GET') {
    const winners = highRollers(transactions)
    sendJSON({
      count: winners.length,
      winners: winners
    })
  }

  else if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Welcome to the Mini Paystack API. Try /api/audit or /api/highrollers')
  }

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({'error': 'Route not found'}))
  }

})

server.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})