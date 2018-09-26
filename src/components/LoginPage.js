import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const Login = (props) => {
    return (
        <div>
            <p>Login Page</p>
            <button onClick={props.dispatch(startLogin)}>Login</button>
        </div>
    )
};

export default connect()(Login);