import axios from "axios";
import api from "../../config/api";
import * as taskActionType from "./taskActionType";

export const getTask = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`${api.API_BASE_URL}/tasks`);
            dispatch({
                type: taskActionType.GET_TASK,
                payload: result.data
            })
        } catch (error) {
            console.log(error);
        }

    }
}