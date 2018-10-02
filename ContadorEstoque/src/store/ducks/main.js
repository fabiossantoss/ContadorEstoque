
const INITIAL_STATE = ({
  currentCode: null,
  currentItemUpdate: {},
  loading: false,
  listItem: [{ id: 0, product: '09838', qtde: 2 }],
  error: null,
});


export const Types = {
  ADD: 'main/ADD',
  UPDATE: 'main/UPDATE',
  ADD_QTDE: 'main/ADD_QTDE',
  DELETE_QTDE: 'main/DELETE_QTDE',
  SUCCESS: 'main/SUCCESS',
  FAILURE: 'main/FAILURE',
};

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        currentCode: action.payload.currentCode,
        loading: true,
        error: null,
      };
    case Types.UPDATE:
      return {
        ...state,
        listItem: action.payload.newList,
      };
    case Types.ADD_QTDE:
      return {
        ...state,
      };
    case Types.DELETE_QTDE:
      return {
        ...state,
      };
    case Types.SUCCESS:
      return {
        currentCode: null,
        listItem: [...state.listItem, action.payload.listItem],
        loading: false,
        error: null,
      };
    case Types.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  add: currentCode => ({
    type: Types.ADD,
    payload: {
      currentCode,
    },
  }),
  success: listItem => ({
    type: Types.SUCCESS,
    payload: {
      listItem,
    },
  }),
  update: newList => ({
    type: Types.UPDATE,
    payload: {
      newList,
    },
  }),
  addQtde: item => ({
    type: Types.ADD_QTDE,
    payload: {
      item,
    },
  }),
  deleteQtde: item => ({
    type: Types.DELETE_QTDE,
    payload: {
      item,
    },
  }),
  failure: error => ({
    type: Types.FAILURE,
    payload: {
      error,
    },
  }),
};
