import { actionsypes } from "_asset/globalTypes";
import { cardList } from "pages/Home/types";
import { usersListTypes } from "redux/actions/getList";

const initState: Array<any> = [];

export const usersListRedcer = (
  state: Array<cardList> = initState,
  action: actionsypes
): Array<cardList> => {
  switch (action.type) {
    case usersListTypes.SUCCESS:
      return [...action.payload];

    case usersListTypes.FAILD:
      return [...action.payload];

    default:
      return [...state];
  }
};
