import { all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import auth from './modules/auth/sagas';
import { sagas as users } from './modules/users/sagas';

export default function* root() {
  yield all([...users, ...auth]);
}
