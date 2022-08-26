import HttpService, {HttpMethod} from "./HttpService";

export interface GenerateReportDataProps {
  from: string;
  to: string;
  projectId: string;
  gatewayId: string;
}

export default class ReportService {
  constructor(
    private httpService: HttpService,
  ) {
  }

  async getProjects() {
    return this.httpService.fireRequest({
      url: "projects",
      method: HttpMethod.GET,
    })
  }

  async getGateways() {
    return this.httpService.fireRequest({
      url: "gateways",
      method: HttpMethod.GET
    })
  }

  async generateReport(data: GenerateReportDataProps) {
    return this.httpService.fireRequest({
      url: "report",
      method: HttpMethod.POST,
      body: data
    })
  }

}
