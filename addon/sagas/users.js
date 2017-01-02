import { call, put, takeEvery } from 'redux-saga/effects';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* moreAsync() {
    yield call(delay, 0);
    yield put({type: 'MORE'});
}

export default function* moarAsync() {
    yield* takeEvery('MOAR', moreAsync);
}
