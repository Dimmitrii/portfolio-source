import { createStore, combineReducers,applyMiddleware  } from 'redux';
import reduxThunk from 'redux-thunk';

import techReducer from './tech/reducer';
import { postReducer } from './post/reducer';
import { coctailsReducer } from "./coctails/reducer";
import { carsReducer } from "./cars/reducer";
import { chatReducer } from "./chat/reducer";
 
const reducers = combineReducers({
  cars: carsReducer,
  tech: techReducer,
  post: postReducer,
  coctails: coctailsReducer,
  chat: chatReducer,
});

const middlewares = applyMiddleware(reduxThunk);

const store = createStore(reducers,middlewares);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;