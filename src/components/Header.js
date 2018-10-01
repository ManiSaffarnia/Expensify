import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogOut } from '../actions/auth';
import { connect } from "react-redux";

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button onClick={startLogout}>Sign Out</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);