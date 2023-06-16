import  uniqBy  from "lodash/uniqBy";
import { actionsypes } from "_asset/globalTypes"
import { tableDataType } from "pages/Home/types"
import { tableActionsTypes } from "redux/actions/tableActions";




const initState:Array<any> =[]

export const tableReducer= (state:Array<tableDataType>=initState,action:actionsypes) =>{

    switch (action.type) {
        case tableActionsTypes.ADD_USER:
          return uniqBy([...state,action.payload], (item) =>item.key)
           
        case tableActionsTypes.REMOVE_USER:
          return [...state?.filter(item => item.key !== action.payload)]
    
        default:
          return [...state];
      }

}