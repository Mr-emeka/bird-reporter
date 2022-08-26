import {DataAction} from "../../types";
import {reducerMultiplexer} from "../../utils";
import {
  GENERATE_REPORT,
  GENERATE_REPORT_FAILED,
  GENERATE_REPORT_SUCCESS, GENERATED_REPORT,
  GET_GATEWAYS, GET_GATEWAYS_FAILED, GET_GATEWAYS_SUCCESS,
  GET_PROJECTS,
  GET_PROJECTS_FAILED,
  GET_PROJECTS_SUCCESS,
  reportState,
  ReportStateProps
} from "./types";


export default function reportReducer(state = reportState, action: DataAction) {
  return reducerMultiplexer<ReportStateProps>({
    [GET_PROJECTS]: (state, action) => {
      return {...state, loading: action.data}
    },
    [GET_PROJECTS_SUCCESS]: (state, action) => {
      return {...state, loading: false, projects: action.data}
    },
    [GET_PROJECTS_FAILED]: (state, action) => {
      return {...state, loading: false, projects: [], error: action.data}
    },
    [GET_GATEWAYS]: (state, action) => {
      return {...state, loading: action.data}
    },
    [GET_GATEWAYS_SUCCESS]: (state, action) => {
      return {...state, loading: false, gateways: action.data}
    },
    [GET_GATEWAYS_FAILED]: (state, action) => {
      return {...state, loading: false, gateways: [], error: action.data}
    },
    [GENERATE_REPORT]: (state, action) => {
      return {...state, loading: action.data, generatedReport: false}
    },
    [GENERATED_REPORT]: (state, action) => {
      return {...state, generatedReport: true}
    },
    [GENERATE_REPORT_SUCCESS]: (state, action) => {
      return {...state, reports: action.data, loading: false}
    },
    [GENERATE_REPORT_FAILED]: (state, action) => {
      return {...state, error: action.data, generatedReport: false, loading: false}
    }
  })
  (state, action);
}
