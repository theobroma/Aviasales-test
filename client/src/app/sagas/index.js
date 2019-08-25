import { all, fork, join, put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { GET_SEARCH_ID, REQUEST } from 'constants/actions';

export function* getSearchId() {
  console.log('getSearchId SAGA');
  try {
    const response = yield call(axios.get, `https://front-test.beta.aviasales.ru/search`);
    console.log(response);

    // yield put({ type: GET_ISO_CODE_COUNTRY + SUCCESS, results });
  } catch (error) {
    // yield put({ type: GET_ISO_CODE_COUNTRY + ERROR, error });
  }
}

export function* watchGetSearchId() {
  yield takeEvery(GET_SEARCH_ID + REQUEST, getSearchId);
}

export default function* rootSaga() {
  yield all([watchGetSearchId()]);
}
