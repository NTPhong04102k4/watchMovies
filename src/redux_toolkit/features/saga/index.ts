// import 'regenerator-runtime/runtime'
// import sagaMiddleware from 'redux-saga'
// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import { GET_VALUE_USER } from '../utils/getInforUsers';
// import Api from '...';
// call gọi 1 func trong saga
// takeLeading: chạy saga mỗi lần dispatch nhưng phải đợi lệnh này chạy xong nếu trong thời gian chạy mà dispatch action sẽ ko tính 
// take : hoạt động theo watcher và worker
// fork: chạy 1 generator func , nó chạy độc lập ko ảnh hưởng các action khác nên có thể chạy song song
// thrtotle: đảm bảo chạy saga trong 1 khoảng thời gian
// debounce:: trì hoãn 1 thời gian 


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// src/sagas/todoSaga.js
// src/sagas/todoSaga.ts
// src/sagas/todoSaga.ts
import { takeLatest, call, put, all,takeEvery } from 'redux-saga/effects';


import { addTodo, updateTodo, deleteTodo, addTodoRequest, updateTodoRequest, deleteTodoRequest } from '../todoSlice';
import { PayloadAction } from '@reduxjs/toolkit';
function* watchAddTodo() {  console.log('watcher')
  yield takeEvery(addTodoRequest.type, addTodoSaga);
}

function* watchUpdateTodo() {  console.log('watcher')
  yield takeEvery(updateTodoRequest.type, updateTodoSaga);
}

function* watchDeleteTodo() {
  console.log('watcher')
  yield takeEvery(deleteTodoRequest.type, deleteTodoSaga);
}

export default function* rootSaga() {
  yield all([
    watchAddTodo(),
    watchUpdateTodo(),
    watchDeleteTodo(),
    
  ]);
}
// src/features/todo/sagas.ts



function* addTodoSaga(action: PayloadAction<{ id: number | string; name: string }>) {
  try {

    yield put(addTodo(action.payload));
  } catch (error) {
    console.error('Error adding todo:',error);
  }
}

function* updateTodoSaga(action: PayloadAction<{ id: number | string, newName: string }>) {
  try {
    yield put(updateTodo(action.payload));
  } catch (error) {
    console.error('Error updating todo:', error);
  }
}

function* deleteTodoSaga(action: PayloadAction<number | string>) {
  try {
  
    console.log('wdw')
    yield put(deleteTodo(action.payload));
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
}







/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// chạy saga mỗi lần dispatch action 
// function* mySaga() {
//   yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// chạy saga lần cuối cùng action dispatch
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
// }

// export default mySaga