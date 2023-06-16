import { combineReducers } from "@reduxjs/toolkit";
import { usersListRedcer } from "./usersListRedcer";
import { tableReducer } from "./tableReducer";
import { loadingRedcer } from "./loadingRedcer";
import { actionsypes } from "_asset/globalTypes";


const appReducer = combineReducers({
  usersListRedcer,
  tableReducer,
  loadingRedcer,
});

export const rootReducer = (state: any, action: actionsypes) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};



// export const rootReducer = combineReducers({
//   usersListRedcer,
//   tableReducer,
//   loadingRedcer,
// });
