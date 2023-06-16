import { useEffect, useState } from "react"
import WorkoutForm from './Form'
import { useWorkoutContext /* customer hook*/} from "../WorkoutContext/hookContext"

const Home = () => {
// const [workouts, setWorkouts] = useState([])
const {workouts, dispatch} = useWorkoutContext()

useEffect(() => {
    const fetchWorkouts = async () => {
    const response = await fetch('/workout' /* the link will be the same which stated in app.use()*/)
    const json = await response.json()

    if(response.ok){
        // setWorkouts(json)
        dispatch({type: 'Set_Workout', payload: json}) // action which will want to be execute. This will go to Context.js and execute the function as per the action.type.
    }
    }
    fetchWorkouts()
// console.log('sds ', )
}, [])

const handleClick = async (e) => {
    let a = e.target.id
    const response = await fetch('/workout/' + a, {
        method: 'DELETE'
    })

    const json = await response.json()
    if(response.ok){
        dispatch({type: 'Delete_Workout', payload: json})
        // console.log(json._id)
    }
}

    return(
        <div>
        <h1>Home Page</h1>
        {workouts && workouts.map((workout) => (
            // console.log(workout._id)
            <div key={workout._id}>
            <h4>Title: {workout.title}</h4>
            <p>Load (Kg): {workout.load}</p>
            <p>Reps: {workout.reps}</p>
            <button id={workout._id} onClick={handleClick}>Delete Workout</button>
            </div>
        ))}

        <div>
            <WorkoutForm />
        </div>
        </div>
    )
}

export default Home