import { createStore } from "redux";
import { TaskReducer } from "./reducers/TaskReducer";

export const store = createStore(TaskReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
