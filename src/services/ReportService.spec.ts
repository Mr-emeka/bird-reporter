import HttpService, { HttpMethod} from "./HttpService";
import axios, { AxiosResponse} from "axios";
import {baseURL} from "../constants";

let baseURI = `https://www.google.com`;

describe("Report Service", () => {
  test("fetch projects", async () => {
    const client = axios.create({
      baseURL,
    });

    client.request = jest.fn().mockResolvedValueOnce({
      data: {
        error: false,
      },
    } as AxiosResponse);

    const service = new HttpService(client);

    const thenFn = jest.fn();
    const catchFn = jest.fn();

    await service
      .fireRequest({
        url: "projects",
        method: HttpMethod.GET,
      })
      .then(thenFn)
      .catch(catchFn);

    expect(catchFn).not.toHaveBeenCalled();
    expect(thenFn).toHaveBeenCalledWith({
      error: false,
    });
  });
})
