
const express = require('express')
const cors = require('cors')
const SQL = require('./helpers/db')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send({ msg: "seccess" })
})

app.get('/customers', async (req, res) => {
    try {
        const data = await SQL('SELECT * FROM customers')
        res.send(data)
    } catch (error) {
        res.send({ error: error })
        console.log(error)
    }
})
app.get('/todos', async (req, res) => {
    try {
        const data = await SQL(`
           SELECT
            todos.id,
            todos.todobody,
            todos.created,
            customers.id as customerId,
            customers.name,
            todos.isTodoComplete
           FROM todos
           INNER JOIN customers ON customers.id = todos.customerId;`)
        res.send(data)
    } catch (error) {
        res.send({ error: error })
        console.log(error)
    }
})
app.post('/addtodo', async (req, res) => {
    const { todobody, customer } = req.body
    try {
        const data = await SQL(`insert into todos(todobody, customerId) values ('${todobody}',${customer})`)
        res.send({ msg: "Task has been addes" })
    } catch (error) {
        res.send({ error: error })
        console.log(error)
    }
})
app.put('/istodocomplet', async (req, res) => {
    const { boolean, todoId } = req.body
    try {
        const data = await SQL(`UPDATE todos SET isTodoComplete = ${boolean} WHERE id = ${todoId}`)
        res.send({ msg: "Task has been changes success" })
    } catch (error) {
        res.send({ error: error })
        console.log(error)
    }
})

app.delete('/delTodo/:todoId', async (req, res) => {
    try {
        const data = await SQL(`DELETE FROM todos.todos WHERE id = ${req.params.todoId}`)
        res.send({ msg: 'succuss delete' })
    } catch (error) {
        res.send({ err: 'error' })
    }
})
// Running server on localhost 1000
app.listen(1000, function () {
    console.log("Express server listening")
})