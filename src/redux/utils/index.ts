import { DataAction } from "../types";

export type Reducer<T> = (state: T, action: DataAction) => T;

export function reducerMultiplexer<T>(o: { [key: string]: Reducer<T> }): Reducer<T> {
  return function (state: T, action: DataAction): T {
    if (!o[action.type]) return state;
    return o[action.type](state, action);
  };
}
