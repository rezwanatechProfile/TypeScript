import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";


const reducers = combineReducers({
  // the key is the name of the piece of state which is going to be added to the store. repositories is the name of the piece of state and repositoriesReducer is the reducer that is going to manage that piece of state.
  repositories: repositoriesReducer
});

export default reducers;

// This is the type definition for the root state object that is going to be returned by the useSelector hook. It is going to be used in the components to get access to the state.
export type RootState = ReturnType<typeof reducers>;