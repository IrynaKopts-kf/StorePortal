import { Redirect, Route } from 'react-router';
import { AppRouts } from '../../route-config';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthenticationError, selectUser } from '../../../store/selectors';

export const ProtectedRoute = ({ ...props }): JSX.Element => {
  const user = useSelector(selectUser);
  const authenticationError = useSelector(selectAuthenticationError);
  return (
    <Route>
      {
        user ? (
          React.createElement(props.component, {})
        ) : (
          authenticationError ? (
            <Redirect
              to={{ pathname: AppRouts.WELCOME, state: { from: props.location } }}
            />
          ) : (
            <Redirect to={AppRouts.WELCOME} />
          )
        )
      }
    </Route>
  );
};
