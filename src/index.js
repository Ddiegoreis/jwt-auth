import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://diegoUser:caneta@2015@cluster0.zcyax.mongodb.net/jwt-auth?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use(routes)

app.listen(3333, console.log('Server is running'))