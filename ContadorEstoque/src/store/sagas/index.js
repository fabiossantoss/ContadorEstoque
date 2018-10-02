import { all, takeLatest } from 'redux-saga/effects';

import { Types as MainTypes } from 'store/ducks/main';

import { add, addQtde, deleteQtde } from './main';

export default function* rootSga() {
  return yield all([
    takeLatest(MainTypes.ADD, add),
    takeLatest(MainTypes.ADD_QTDE, addQtde),
    takeLatest(MainTypes.DELETE_QTDE, deleteQtde),
  ]);
}
