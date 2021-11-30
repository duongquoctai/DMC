import React from 'react';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Grid, Button } from '@mui/material';
import { apiConfig } from '~/config';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

OpenIDLogin.propTypes = {
  className: PropTypes.string
};

function OpenIDLogin({ className }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={clsx(classes.root, className)}>
      <Grid item xs>
        <Button
          fullWidth
          size="large"
          href={`${apiConfig.apiUrl}/csoc/auth`}
          variant="contained"
        >
          Login via FPT Account
        </Button>
      </Grid>
    </Grid>
  );
}

export default OpenIDLogin;
