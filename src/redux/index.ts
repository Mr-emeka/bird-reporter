import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import suspenseReducer from "./modules/suspense/reducers";
import userReducer from "./modules/user/reducers";
import {UserStateProps} from "./modules/user/types";
import reportReducer from "./modules/report/reducers";
import {ReportStateProps} from "./modules/report/types";


const rootReducer = combineReducers({
  suspense: suspenseReducer,
  user: userReducer,
  report: reportReducer

});
const composeEnhancers = composeWithDevTools({ trace: false, traceLimit: 25 });

function newStore() {
  return createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk))
  );
}

let store = newStore();

export default function getStore() {
  return store;
}

export function getState(): RootState {
  return store.getState();
}

export interface RootState {
  suspense: boolean;
  user: UserStateProps;
  report: ReportStateProps
}

export type AppDispatch = typeof store.dispatch;
