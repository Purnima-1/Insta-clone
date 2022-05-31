const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const connectDB = require('./config/keys')
const app = express()
const {MONGOURI} = require('./config/keys')

mongoose.connect(MONGOURI)
mongoose.connection.on('connected', ()=> {
    console.log('Connected to Mongo');
   })

   mongoose.connection.on('error', (error)=> {
    console.log('error connecting',error);
   })   

require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
