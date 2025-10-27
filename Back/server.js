import express from 'express'
import dotenv from 'dotenv'
import todoRouter from './routers/taskOperations.js'
import ErrorHandler from './middleWare/errorHandler.js'

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
 
const PORT = process.env.PORT

// GET
app.use('/todo',todoRouter)

// POST
app.post('/todo/task',(req,res)=>{
    res.send('Task added')
})

// DELETE

app.delete('/todo',todoRouter)

app.use(ErrorHandler)

app.listen(PORT,()=>{
    console.log('TODO api is working...')
})