import { SUSPEND } from "./types";
import { DataAction } from "../../types";

export function suspend(suspend: boolean): DataAction {
  return {
    type: SUSPEND,
    data: suspend,
  };
}
