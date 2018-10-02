import { put, select } from 'redux-saga/effects';
import { Creators as MainActions } from 'store/ducks/main';

export function* add(action) {
  try {
    const list = yield select(state => state.main.listItem);

    const itemFind = list.find(item => item.id === Number(action.payload.currentCode));

    if (itemFind) {
      const newList = list.map((item) => {
        return item.id !== Number(action.payload.currentCode) ? item : {
          id: itemFind.id,
          product: itemFind.product,
          qtde: itemFind.qtde + 1,
        };
      });

      yield put(MainActions.update(newList));
    } else {
      const item = {
        id: Number(action.payload.currentCode),
        product: action.payload.currentCode,
        qtde: 1,
      };
      yield put(MainActions.success(item));
    }
  } catch (erro) {
    yield put(MainActions.failure('error ao adicionar item'));
  }
}

export function* addQtde(action) {
  try {
    const list = yield select(state => state.main.listItem);

    const itemFind = list.find(item => item.id === Number(action.payload.item.id));

    if (itemFind) {
      console.tron.log(itemFind);
      const newList = list.map((item) => {
        return item.id !== Number(action.payload.item.id) ? item : {
          id: itemFind.id,
          product: itemFind.product,
          qtde: itemFind.qtde + 1,
        };
      });

      yield put(MainActions.update(newList));
    }
  } catch (erro) {
    yield put(MainActions.failure('error ao adicionar item'));
  }
}

export function* deleteQtde(action) {
  try {
    const list = yield select(state => state.main.listItem);

    const itemFind = list.find(item => item.id === Number(action.payload.item.id));

    if (itemFind.qtde === 1) return;

    if (itemFind) {
      console.tron.log(itemFind);
      const newList = list.map((item) => {
        return item.id !== Number(action.payload.item.id) ? item : {
          id: itemFind.id,
          product: itemFind.product,
          qtde: itemFind.qtde - 1,
        };
      });

      yield put(MainActions.update(newList));
    }
  } catch (erro) {
    yield put(MainActions.failure('error ao adicionar item'));
  }
}
