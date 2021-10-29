import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PATH_PAGE } from '~/routes/paths';
import LoadingScreen from '~/components/LoadingScreen';

// ----------------------------------------------------------------------

AuthProtect.propTypes = {
  children: PropTypes.node
};

function AuthProtect({ children }) {
  const { accessToken, loginLoading } = useSelector(state => state.auth);

  if (loginLoading) {
    return <LoadingScreen />;
  }

  if (!accessToken) {
    return <Redirect to={PATH_PAGE.auth.login} />;
  }

  return children;
}

export default AuthProtect;
