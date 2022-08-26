import HttpService, {HttpMethod} from "./HttpService";


export default class UserService {
  constructor(
    private httpService: HttpService,
  ) {
  }

  async getUser() {
    return this.httpService.fireRequest({
      url: "users",
      method: HttpMethod.GET,
    })
  }
}
