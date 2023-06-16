export interface cardList {
    id: number;
    name: string;
    email:string;
  }

  export interface tableDataType {
    key:string
    name: string;
    email:string;
  }

  export interface selectorObject {
    usersList: Array<cardList>;
    tableReducer: Array<tableDataType>;
    loadingRedcer: boolean;
  }