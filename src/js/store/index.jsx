import {createstore} from 'redux';
import rootReducer from './reducers/rootReducer.jsx';

const store = createstore(rootReducer);

export default store;