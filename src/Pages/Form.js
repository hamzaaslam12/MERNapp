import { useState } from "react"
import { useWorkoutContext /* customer hook*/} from "../WorkoutContext/hookContext"

const WorkoutForm = () => {
    const {dispatch} = useWorkoutContext()
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

    const workout = {title, reps, load} // create a object which store the value of the states

    const response1 = await fetch('/workout' /* the link will be the same which stated in app.use()*/ , {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const json = await response1.json()
    // console.log(json)
    if(!response1.ok){
        setError(json.error) //this .error is the same keyword which we defined in backend >> controller >> set the json property of [error: error.message] 
    }
    if(response1.ok){
        setTitle('')
        setReps('')
        setLoad('')
        setError(null)
        // console.log('new data added', json)
        dispatch({type: 'Create_Workout', payload: json})

    }

    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Exercise Form</h3>
            <label>Exercise title</label>
            <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <label>Exercise Reps</label>
            <input 
            type='number'
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            />
            <label>Exercise load</label>
            <input 
            type='number'
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            />
            <button>Add Workout</button>
            {error && <p>{error}</p>}
        </form>
    )
}

export default WorkoutForm