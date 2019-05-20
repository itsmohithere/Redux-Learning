/**
 * Initial states remains constant, we will not change the value of initial states valyue.
 */
const initialState = {
    counter : 0,
    changeCounter:0,
    cartError:false
};


/**
 * Redux data flow is : value-> dispatch action -> reducers -> store -> updated value.
 * Reducer is nothing but a function through which we change the value of redux store.
 * Reducers holds two parameters, state and action, state hold the initial value of states.
 * Reducer recieves value through dispatch action. 
 * We display value of using mapStateToProps in componenets.
 * We can create multiple reducers but always pass root reducer in the createStore. Reffer store.js
 */
const reducer = (state = initialState, action) => {
    //Through actions type we return the new state value. 
    if (action.type === 'inc') {
        return {
            ...state,
            counter : state.counter + 1,//return new state
        }
    }

    if (action.type === 'dec') {
        return{
            ...state,
            counter : state.counter === 0 ? state.counter : state.counter - 1,//return new state
        }
    }

    if (action.type === 'input') {
        return{
            ...state,
            counter : state.changeCounter, //return new state
        }
    }

    if (action.type === 'changeInput') {//This action on every change in input box.
        if (isNaN(action.value)) {
            return{
                ...state,
                cartError:true,
                counter:state.counter
            }
        }else{
            return{
                ...state,
                cartError:false,
                changeCounter:action.value,
                counter:state.counter
            }
        }
    }
    return state; 
};

export default reducer;
