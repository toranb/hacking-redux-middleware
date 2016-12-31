import saga from 'npm:redux-saga';
import effects from 'npm:redux-saga/effects';

const { takeEvery } = saga;
const { call, put } = effects;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* moreAsync() {
    yield call(delay, 0);
    yield put({type: 'MORE'});
}

export default function* moarAsync() {
    yield* takeEvery('MOAR', moreAsync);
}
