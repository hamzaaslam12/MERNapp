const express = require('express')
const mongoose = require('mongoose')

// importing the routes here
const workoutRoutes = require('./Routes/workoutsRoutes')

// express app
const app = express()

// middleware
app.use(express.json()) // this will help to read the req body in post and patch request 

// routes
app.use('/workout', workoutRoutes)

const url = 'mongodb+srv://muhammadhamzaraza291:test123@mernapp.jnksmxj.mongodb.net/?retryWrites=true&w=majority'
// password not contain special characters

mongoose.connect(url)
.then(() => {
// listening app
app.listen(4000, () => { console.log('connected to db and app is running on port 4000') })
})
.catch(err => {
    console.log('err', err)
})


