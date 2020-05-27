import { createStore, combineReducers,applyMiddleware  } from 'redux';
import reduxThunk from 'redux-thunk';

import techReducer from './tech/reducer';
import { postReducer } from './post/reducer';
import { coctailsReducer } from "./coctails/reducer";
import { carsReducer } from "./cars/reducer";
import { toDoListReducer } from "./toDoList/reducer";
 
const reducers = combineReducers({
  cars: carsReducer,
  tech: techReducer,
  post: postReducer,
  coctails: coctailsReducer,
  toDoList: toDoListReducer,
});

const middlewares = applyMiddleware(reduxThunk);

const store = createStore(reducers,middlewares);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;