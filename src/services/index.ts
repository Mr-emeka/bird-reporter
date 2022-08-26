import HttpService from "./HttpService";
import UserService from "./UserService";
import ReportService from "./ReportService";

// SERVICES CONTAINER
const httpService = new HttpService();

export const userService = new UserService(httpService);
export const reportService = new ReportService(httpService);
