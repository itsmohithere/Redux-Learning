import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import App from '../App';
import {connect} from 'react-redux';

class InputCartValue extends Component {
    render() {
        let {crtError} = this.props;
        if (crtError) {
            crtError = <p style={{color:'red'}}>Enter Only Number</p>
        }else{
            crtError = <button onClick={()=>{this.props.inputCartValue(parseInt(this.props.ctr))}}>Submit</button>
        }
        return( 
            <Fragment>
                <h1>{`Total Cart Value is :- ${this.props.ctr}`}</h1>
                <div className="App-header" >
                    <App hide={true}/>
                    <input name='cartValue' onChange={(e)=>this.props.changeHandler(parseInt(e.target.value))} placeholder='Input cart value' type='text'/> 
                    {crtError}
                    <NavLink style={{color:'blue'}} to='/'>Go back</NavLink>
                </div>
            </Fragment>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        inputCartValue : (value)=>{
            dispatch({type:'input',value:value})
        },
        changeHandler : (value) => {
            dispatch({type:'changeInput',value:value})
        }

    }
}

const mapStateToProps = state => {
    return{
        crtError : state.cartError,
        ctr:state.counter
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(InputCartValue);