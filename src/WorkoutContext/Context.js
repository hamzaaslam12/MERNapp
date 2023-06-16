import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()

export const workoutReducer = (state, action /* reducer will always have the state and the action property then the action.type will be check and respective actions can be taken*/) => {
    // console.log('actions ', action.payload._id)
    switch (action.type) {
        case 'Set_Workout':
            return{ workouts /*the name must be match with the state initial values */ : action.payload}

        case 'Create_Workout':
            return{ workouts: [action.payload, ...state.workouts]}

            case 'Delete_Workout':
            return{ 
                workouts: state.workouts.filter(w => w._id !== action.payload._id)
            }

        default:
            return state
    }
}

export const WorkoutContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutReducer /* reducer name which will contain switch cases*/, /* the state values*/{
        workouts: null
    })
    
/* the sequence of reduc or statemanagement is:
1) initialize the state.using the useReducer
2) dispatch which contain the type and the payload. This available in every components
3) action which contain the type and paylad value so execute the function as per the defined type.

1 and 3 are in same file and 2 is in every componenets.

*/

    return (
    <WorkoutContext.Provider value={{...state, dispatch}} /*provider will always have two property: 1) state 2)dispatch function having the property of action.type and action.payload values*/>
        {children}
    </WorkoutContext.Provider>
    )
}
