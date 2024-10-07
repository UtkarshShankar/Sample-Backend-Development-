import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.get('/first', (req, res) => {
  res.send('This is a test!')
})

app.get('/second', (req, res) => {
  res.send('<h1>this is the second test</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})