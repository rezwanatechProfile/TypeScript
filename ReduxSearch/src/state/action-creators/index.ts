import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import axios from "axios";


export const searchRepositories = (term: string) => {

  return async (dispatch: Dispatch<Action>) => {

    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try{
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {params: {text: term}});
      const names = data.objects.map((result: any) => {
        return result.package.name + ' - ' + result.package.version;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      });

    }catch(err: any){
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      })
    }

  }

}