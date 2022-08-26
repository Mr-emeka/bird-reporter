export const GET_PROJECTS = "@bird-report/report/get-projects"
export const GET_PROJECTS_SUCCESS = "@bird-report/report/get-projects-success"
export const GET_PROJECTS_FAILED = "@bird-report/report/get-projects-failed"

export const GET_GATEWAYS = "@bird-report/report/get-gateways"
export const GET_GATEWAYS_SUCCESS = "@bird-report/report/get-gateways-success"
export const GET_GATEWAYS_FAILED = "@bird-report/report/get-gateways-failed"

export const GENERATE_REPORT = "@bird-report/report/generate-report"
export const GENERATE_REPORT_SUCCESS = "@bird-report/report/generate-report-success"
export const GENERATE_REPORT_FAILED = "@bird-report/report/generate-report-failed"

export const GENERATED_REPORT = "@bird-report/report/generated-report"

export interface ReportStateProps {
  loading: boolean
  projects: Array<Record<string, any>>
  reports: Array<Record<string, any>>
  gateways: Array<Record<string, any>>
  error: any
  generatedReport: boolean
}

export const reportState: ReportStateProps = {
  loading: false,
  projects: [],
  reports: [],
  gateways: [],
  error: null,
  generatedReport: false
};
