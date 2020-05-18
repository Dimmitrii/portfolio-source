import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import auth from 'helpers/auth';

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route {...rest} render={(props) => {
      const isAuthorized = auth.isAuthorized();

      return isAuthorized
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login' }} />
    }} />
  )
}

export default PrivateRoute;