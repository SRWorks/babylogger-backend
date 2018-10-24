var express = require('express')

var port = process.env.PORT || 8080

var app = express()

app.get('/', (req, res) => {
  res.send('backend is working!')
})

app.listen(port, () => console.log(`App is listening on port: ${port}`))
