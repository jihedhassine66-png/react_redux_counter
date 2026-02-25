import {createstore} from 'redux';
import rootReducer from '../Reducers/rootReducer.jsx';

const store = createStore(rootReducer);

export default store;