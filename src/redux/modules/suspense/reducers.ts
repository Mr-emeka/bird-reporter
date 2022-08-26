import { DataAction } from "../../types";
import { reducerMultiplexer } from "../../utils";
import { SUSPEND } from "./types";

export default function suspenseReducer(
  suspenseState: boolean = false,
  suspenseAction: DataAction
) {
  return reducerMultiplexer<boolean>({
    [SUSPEND]: (state, action) => {
      return action.data;
    },
  })(suspenseState, suspenseAction);
}
