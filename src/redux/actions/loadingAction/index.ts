import { actionsypes } from "_asset/globalTypes";

export enum loadingactionType {
  LOADING = "LOADING",
}

export const loadingaction = (payload: any): actionsypes => ({
  type: loadingactionType.LOADING,
  payload,
});
