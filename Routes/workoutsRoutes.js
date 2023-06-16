const express = require('express')
const router = express.Router()

const {
    createWorkout,
    getAllWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


// GET request
router.get('/', getAllWorkout)


// router.get('/workout/', (req, res) => {
//   res.json({messg: 'get request done'})
// })

// GET a single request
router.get('/:id', getSingleWorkout)

// Post a request
router.post('/', createWorkout /* this is the function imported from the controller*/)

// Delete a request
router.delete('/:id', deleteWorkout)

// Update a request
router.patch('/:id', updateWorkout)


// router.get('/', (req, res) => {
//     res.json({mssg: 'GET all workouts'})
//   })
  
module.exports = router