import React from 'react';
import {NavLink} from 'react-router-dom';
import {startLogOut} from '../actions/auth';
import {connect} from "react-redux";

const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={props.dispatch(startLogOut)}>Sign Out</button>
    </header>
);

export default connect()(Header);