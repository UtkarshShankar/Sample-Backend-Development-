import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.get('/first', (req, res) => {
  res.send('This is a test!')
})

app.get('/jobs', (req, res) => {
  const messages = [
    {
      "id": 1,
      "personName": "Alice Johnson",
      "designation": "Software Engineer"
    },
    {
      "id": 2,
      "personName": "Bob Smith",
      "designation": "Project Manager"
    },
    {
      "id": 3,
      "personName": "Charlie Brown",
      "designation": "Product Designer"
    },
    {
      "id": 4,
      "personName": "Diana Prince",
      "designation": "UX Researcher"
    },
    {
      "id": 5,
      "personName": "Edward Elric",
      "designation": "Data Scientist"
    },
    {
      "id": 6,
      "personName": "Fiona Gallagher",
      "designation": "DevOps Engineer"
    },
    {
      "id": 7,
      "personName": "George Michael",
      "designation": "QA Analyst"
    },
    {
      "id": 8,
      "personName": "Hannah Baker",
      "designation": "Marketing Specialist"
    },
    {
      "id": 9,
      "personName": "Isaac Newton",
      "designation": "Research Scientist"
    },
    {
      "id": 10,
      "personName": "Jessica Jones",
      "designation": "Content Writer"
    }
  ];
  res.send(messages);
})

app.get('/second', (req, res) => {
  res.send('<h1>this is the second test</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})