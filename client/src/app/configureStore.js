import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './helpers/localStorage';
import rootReducer from './reducers';
// mock data
import TICKETS_MOCK_DATA from './helpers/TICKETS_MOCK_DATA.json';
import CURRENCY_MOCK_DATA from './helpers/CURRENCY_MOCK_DATA.json';

const configureStore = () => {
  const persistedState = loadState();

  let totalInitialState = {
    tickets: {
      data: TICKETS_MOCK_DATA.tickets,
      pending: false,
      errorMessage: '',
    },
    currency: {
      data: CURRENCY_MOCK_DATA,
      pending: false,
      errorMessage: '',
    },
  };
  // if persistedState is not empty then assign parsed persistedState to initState
  if (persistedState) {
    totalInitialState = persistedState;
  }

  const logger = createLogger({
    collapsed: true,
  });

  const middlewares = [thunk, logger];

  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const store = createStore(
    rootReducer,
    totalInitialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  store.subscribe(
    throttle(() => {
      console.log('saved to localStorage');
      saveState(store.getState());
    }, 1000),
  );

  return store;
};

export default configureStore;
