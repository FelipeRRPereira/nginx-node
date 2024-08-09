const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}
const mysql = require('mysql')

const randomNames = ['Felipe', 'Maria', 'João', 'Ana', 'Carlos', 'Mariana']

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config)

  const createTableSql = `
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `

  connection.query(createTableSql, (createError) => {
    if (createError) {
      console.error(createError)
      res.status(500).send('Error creating table.')
      return
    }

    const randomName =
      randomNames[Math.floor(Math.random() * randomNames.length)]
    const insertSql = `INSERT INTO people(name) values ('${randomName}')`

    connection.query(insertSql, (insertError) => {
      if (insertError) {
        console.error(insertError)
        res.status(500).send('Error inserting data into the database.')
        return
      }

      connection.query('SELECT * FROM people', (selectError, results) => {
        if (selectError) {
          console.error(selectError)
          res.status(500).send('Error retrieving data from the database.')
          return
        }

        let responseHtml = '<h1>Full Cycle Rocks!</h1><ul>'
        results.forEach((person) => {
          responseHtml += `<li>${person.name}</li>`
        })
        responseHtml += '</ul>'

        connection.end()

        res.send(responseHtml)
      })
    })
  })
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})
