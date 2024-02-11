const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.use(cors())

app.get('/', (req, res) => {
  res.render(messages)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})