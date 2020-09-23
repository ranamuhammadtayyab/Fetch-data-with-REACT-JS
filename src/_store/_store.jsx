import { createStore} from "redux";
import {rootReducer} from '../_reducers/_reducers';
// Store
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
