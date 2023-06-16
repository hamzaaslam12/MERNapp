const Workout = require('../modules/workout') //bring Schema so to create data and other functions

//GET all data
const getAllWorkout = async (req, res) => {
    const workout = await Workout.find({}).sort({ createdAt: -1 })

    res.status(200).json(workout)

}

//GET a single data
const getSingleWorkout = async (req, res) => {

    const { id } = req.params
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({ error: 'No data found' })
    }

    res.status(200).json(workout)

}


//delete a single data
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    // if(!id){
    //     return res.status(404).json({error: 'No data found'})
    // }

    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(404).json({ error: 'No data found' })
    }
    res.status(200).json(workout)
}


//Update single data
const updateWorkout = async (req, res) => {
    const { id } = req.params
    // if(!id){
    //     return res.status(404).json({error: 'No data found'})
    // }
    const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body })
    if (!workout) {
        return res.status(404).json({ error: 'No data found' })
    }
    res.status(200).json(workout)
}


//create a new data
const createWorkout = async (req, res) => {

    const { title, reps, load } = req.body //frontend will provide the value of these variables

    // saving data to database
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout) //saving to database
        console.log(workout)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    createWorkout, //exporting this function to module
    getAllWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}
