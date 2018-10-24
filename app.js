var express = require('express')

var port = process.env.PORT || 8080

var app = express()

app.get('/', (req, res) => {
  res.send(JSON.stringify({Hello: 'World'}))
})

app.listen(port, () => console.log(`App is listening on port: ${port}`))
