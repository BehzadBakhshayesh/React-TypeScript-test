import { actionsypes } from "_asset/globalTypes";
import { cardList } from "pages/Home/types";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "redux/store";
import { loadingaction } from "../loadingAction";
import fetchClient from "tools/fetchClient";

export enum usersListTypes {
  SUCCESS = "SUCCESS",
  FAILD = "FAILD",
}

const usersListActionSccess = (payload: any): actionsypes => ({
  type: usersListTypes.SUCCESS,
  payload,
});

const usersListActionFaild = (payload: any): actionsypes => ({
  type: usersListTypes.FAILD,
  payload,
});

export const getUsersList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch) => {
    dispatch(loadingaction(true));
    fetchClient
      .get("api/users")
      .then((res: any) => {
        const data: Array<cardList> = res.data.data.map(
          (item: any): cardList => ({
            id: item.id,
            name: item.first_name,
            email: item.email,
          })
        );
        data.length = 4;
        dispatch(usersListActionSccess(data));
      })
      .catch((err: any) => {
        dispatch(usersListActionFaild(err));
      })
      .finally(() => dispatch(loadingaction(false)));
  };
};
