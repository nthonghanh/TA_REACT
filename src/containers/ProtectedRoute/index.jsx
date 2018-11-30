import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    return (<Route
        { ...rest }
        render={ props => <Component { ...props } /> } />);
};

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default ProtectedRoute;
