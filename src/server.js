const http = require('http');
const fs = require('fs')
const path = require('path')
const { audit, highRollers } = require('./processor');
const port = 3000

const server = http.createServer((req, res) => {

  const getDataBase = () => {
    const filePath = path.join(__dirname, 'data.json')
    const rawData = fs.readFileSync(filePath)
    return JSON.parse(rawData)
  }

  if (req.url === '/api/audit' && req.method === 'GET') {
    const transactions = getDataBase()
    const report = audit(transactions)

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(
      JSON.stringify(report)
    )
  }

  else if (req.url === '/api/highrollers' && req.method === 'GET') {
    const transactions = getDataBase()
    const winners = highRollers(transactions)
    
      res.writeHead(200, { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
     });
    res.end(
      JSON.stringify(winners)
    )

    console.log('winners', winners)
  }

  else if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Mini Paystack API. Try /api/audit or /api/highrollers')
  }

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 'error': 'Route not found' }))
  }

})

server.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})