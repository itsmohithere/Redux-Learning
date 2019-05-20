import {createStore} from 'redux';
import reducer from './reducers';

//Create store and pass root reduces init.
const store = createStore(reducer);

export default store;