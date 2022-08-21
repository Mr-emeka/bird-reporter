import HttpService, {HttpError, HttpMethod, HttpStatus} from "./HttpService";
import axios, {AxiosError, AxiosResponse} from "axios";
import {baseURL} from "../constants";

let baseURI = `https://www.google.com`;

describe("HttpService", () => {
  test("HttpError getters return correct data", () => {
    const httpError = new HttpError(HttpStatus.Ok, {data: "CORRECT"});

    expect(httpError.getStatusCode()).toEqual(HttpStatus.Ok);
    expect(httpError.getData()).toEqual({data: "CORRECT"});
  });

  test("should throw for failed request and empty response", async () => {
    const client = axios.create({
      baseURL,
    });

    client.request = jest.fn().mockRejectedValueOnce({});

    const service = new HttpService(client);

    const catchFn = jest.fn();

    await service
      .fireRequest({
        url: "main",
        method: HttpMethod.POST,
      })
      .catch(catchFn);

    expect(catchFn).toHaveBeenCalled();
  });

  test("should throw for failed request with response", async () => {
    const client = axios.create({
      baseURL,
    });

    client.request = jest.fn().mockRejectedValueOnce({
      response: {
        status: HttpStatus.BadRequest,
        data: {
          error: true,
        },
      },
    } as AxiosError);

    const service = new HttpService(client);

    const catchFn = jest.fn();

    await service
      .fireRequest({
        url: "main",
        method: HttpMethod.POST,
      })
      .catch(catchFn);

    const httpError = new HttpError(HttpStatus.BadRequest, {error: true});
    expect(catchFn).toHaveBeenCalledWith(httpError);
  });

  test("should not throw for successful request", async () => {
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
        url: "main",
        method: HttpMethod.POST,
      })
      .then(thenFn)
      .catch(catchFn);

    expect(catchFn).not.toHaveBeenCalled();
    expect(thenFn).toHaveBeenCalledWith({
      error: false,
    });
  });
})
