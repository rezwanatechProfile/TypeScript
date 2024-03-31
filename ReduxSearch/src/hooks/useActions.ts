import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();
  // This will return an object with all the action creators and will automatically dispatch the action
  return bindActionCreators(actionCreators, dispatch);
};