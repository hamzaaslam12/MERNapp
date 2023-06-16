import { useContext } from "react";
import { WorkoutContext } from "./Context";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)
    return context 
}
