import { actionsypes } from "_asset/globalTypes"


export enum tableActionsTypes {
    ADD_USER='ADD_USER',
    REMOVE_USER='REMOVE_USER',
}

export const addUser =(payload: any):actionsypes=>({
    type:tableActionsTypes.ADD_USER,
    payload
})

export const removeUser =(payload: any):actionsypes=>({
    type:tableActionsTypes.REMOVE_USER,
    payload
})