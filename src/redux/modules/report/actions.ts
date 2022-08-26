import {AppDispatch} from "../../index";
import {
  GENERATE_REPORT_FAILED,
  GENERATE_REPORT_SUCCESS, GENERATED_REPORT,
  GET_GATEWAYS,
  GET_GATEWAYS_FAILED,
  GET_GATEWAYS_SUCCESS,
  GET_PROJECTS,
  GET_PROJECTS_FAILED,
  GET_PROJECTS_SUCCESS
} from "./types";
import {reportService} from "../../../services";
import {HttpError} from "../../../services/HttpService";
import {GenerateReportDataProps} from "../../../services/ReportService";
import {suspend} from "../suspense/actions";

export function getProjectsAsync() {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(getProjects(true));
      const {data: responseData} = await reportService.getProjects();
      console.log(responseData)
      dispatch(getProjectsSuccess(responseData));
    } catch (e) {
      const httpError = e as HttpError;
      const data = httpError.getData();
      console.log("error", data)
      dispatch(getProjectsFailed(data))
      if (data?.error) {
        console.log(`msg: ${data?.error?.detail}`);
      }
    }
  }
}

function getProjects(loading: boolean) {
  return {
    type: GET_PROJECTS,
    data: loading
  }
}

function getProjectsSuccess(data: any) {
  return {
    type: GET_PROJECTS_SUCCESS,
    data
  }
}

function getProjectsFailed(data: any) {
  return {
    type: GET_PROJECTS_FAILED,
    data
  }
}


export function getGatewaysAsync() {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(getGateways(true));
      const {data: responseData} = await reportService.getGateways();
      console.log(responseData)
      dispatch(getGatewaysSuccess(responseData));
    } catch (e) {
      const httpError = e as HttpError;
      const data = httpError.getData();
      console.log("error", data)
      dispatch(getGatewaysFailed(data))
      if (data?.error) {
        console.log(`msg: ${data?.error?.detail}`);
      }
    }
  }
}


function getGateways(loading: boolean) {
  return {
    type: GET_GATEWAYS,
    data: loading
  }
}

function getGatewaysSuccess(data: any) {
  return {
    type: GET_GATEWAYS_SUCCESS,
    data
  }
}

function getGatewaysFailed(data: any) {
  return {
    type: GET_GATEWAYS_FAILED,
    data
  }
}

export function generateReportAsync(data: GenerateReportDataProps, type?: boolean) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(suspend(true));
      const {data: responseData} = await reportService.generateReport(data);
      if (type) dispatch({type: GENERATED_REPORT})
      dispatch(generateReportSuccess(responseData));
      dispatch(suspend(false))
    } catch (e) {
      const httpError = e as HttpError;
      const data = httpError.getData();
      console.log("error", data)
      dispatch(suspend(false))
      dispatch(generateReportFailed(data))
      if (data?.error) {
        console.log(`msg: ${data?.error?.detail}`);
      }
    }
  }
}

function generateReportSuccess(data: any) {
  return {
    type: GENERATE_REPORT_SUCCESS,
    data
  }
}

function generateReportFailed(data: any) {
  return {
    type: GENERATE_REPORT_FAILED,
    data
  }
}
