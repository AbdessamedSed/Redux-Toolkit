import { errorUser, startUser, sucessUser } from "./userSlice"
import axios from "axios";

export const addUser = async (user, dispatch) => {
    dispatch(startUser());

    try {
        const res = await axios.post("http://localhost:5000/api/users", user)
        dispatch(sucessUser(res.data))
    } catch(err){
        dispatch(errorUser())
    }
}