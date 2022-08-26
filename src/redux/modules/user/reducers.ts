import {DataAction} from "../../types";
import {reducerMultiplexer} from "../../utils";
import {GET_USER, GET_USER_FAILED, GET_USER_SUCCESS, userState, UserStateProps} from "./types";

export default function userReducer(
  state = userState,
  action: DataAction
) {
  return reducerMultiplexer<UserStateProps>({
    [GET_USER]: (state, action) => {
      return {...state, loading: action.data}
    },
    [GET_USER_SUCCESS]: (state, action) => {
      return {...state, loading: false, data: action.data}
    },
    [GET_USER_FAILED]: (state, action) => {
      return {...state, loading: false, error: action.data}
    }
  })(state, action);
}
