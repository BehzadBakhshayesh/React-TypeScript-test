import { actionsypes } from "_asset/globalTypes";
import { loadingactionType } from "redux/actions/loadingAction";

const initState: boolean = false;

export const loadingRedcer = (state = initState, action: actionsypes) => {
  switch (action.type) {
    case loadingactionType.LOADING:
      return action.payload;

    default:
      return state;
  }
};
