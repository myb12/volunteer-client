import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
   
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status" style={{ marginTop: 100 }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    };
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;