import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';//Connect function connects our componenet to redux store.
import {NavLink} from 'react-router-dom';

/**
 * We access redux store value through component props.
 */
class App extends Component {
  
  render() {
    let link = ''
    if (!this.props.hide) {
      link = <NavLink to='/inputcartvalue'>Click to enter cart value</NavLink>
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>Cart Value :- &nbsp; <span className=''>{this.props.ctr}</span></p>
          <div className='actionContainer'>
          <br/>
            {link}
            <button type='button' onClick={this.props.onIncreaseCounter}>+</button>
            <button type='button' onClick={this.props.onDecCounter} >-</button>
          </div>
        </header>
      </div>
    );
  }
}

//Recieves state value from redux store.
const mapStateToProps = (state) => {
  return{
    ctr:state.counter,
  }
}

//dispatching new state value to redux state. 
//We can dispatch multiple functions.
const mapDispatchToProps = dispatch => {
  return{
    onIncreaseCounter : () => dispatch({type:'inc'}),//Increasing cart value by 1.
    onDecCounter  : () => dispatch({type:'dec'})//Decreasing cart value by 1.
  }
}

/**
 * Connect hold two parameters and one Component which we want to connect to redux store.
 * It is not compulsory to pass both parameters, we can pass according to our need.
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
