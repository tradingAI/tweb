import { combineReducers, createStore } from 'redux';
import { reducer as globalReducer } from 'store/global/reducer';

const rootReducer = combineReducers({
    global: globalReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default createStore(
    rootReducer,
)