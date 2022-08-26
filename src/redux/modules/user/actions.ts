import {GET_USER, GET_USER_FAILED, GET_USER_SUCCESS} from "./types";
import {AppDispatch} from "../../index";
import {userService} from "../../../services";
import {HttpError} from "../../../services/HttpService";
import {suspend} from "../suspense/actions";


export function getUserAsync() {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(getUser(true));
      dispatch(suspend(true))
      const {data: responseData} = await userService.getUser();
      dispatch(getUserSuccess(responseData[0]))
      dispatch(suspend(false))
    } catch (e) {
      dispatch(suspend(false))
      const httpError = e as HttpError;
      const data = httpError.getData();
      console.log("error", data)
      dispatch(getUserFailed(data))
      if (data?.error) {
        console.log(`msg: ${data?.error?.detail}`);
      }
    }
  };
}

function getUser(loading: boolean) {
  return {
    type: GET_USER,
    data: loading,
  };
}


function getUserSuccess(data: any) {
  return {
    type: GET_USER_SUCCESS,
    data,
  };
}


function getUserFailed(error: any) {
  return {
    type: GET_USER_FAILED,
    error,
  };
}
