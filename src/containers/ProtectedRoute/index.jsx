import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Constants, Routes } from 'utils';

const { NO_PERMISSON } = Constants.PATHS;

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const validPath = Routes.validPath(rest.path);

    return (<Route
        { ...rest }
        render={ props => validPath
            ? <Component { ...props } />
            : <Redirect to={ { pathname: NO_PERMISSON, state: { from: props.location } } } /> } />);
};

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default ProtectedRoute;
