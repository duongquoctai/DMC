import React from 'react';
import Section from './Section';
import { useDispatch, useSelector } from 'react-redux';
import Page from '~/components/Page';
import Logo from '~/components/Logo';
import { Icon } from '@iconify/react';
import { apiConfig } from '~/config';
// import LoginForm from './LoginForm';
// import SocialLogin from './SocialLogin';
// import { useSnackbar } from 'notistack';
import { PATH_PAGE } from '~/routes/paths';
// import closeFill from '@iconify-icons/eva/close-fill';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Link,
  Alert,
  Hidden,
  Container,
  Typography,
  Button
} from '@mui/material';
// import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  header: {
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      padding: theme.spacing(7, 5, 0, 7)
    }
  },
  content: {
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
  },
  divider: {
    margin: theme.spacing(3, 0)
  }
}));

// ----------------------------------------------------------------------

function LoginView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loginLoading } = useSelector(state => state.auth);

  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <Page title="DMC | Login" className={classes.root}>
      <header className={classes.header}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        {/* <Hidden smDown>
          <Box sx={{ mt: { md: -2 }, typography: 'body2' }}>
            Don’t have an account? &nbsp;
            <Link
              underline="none"
              variant="subtitle2"
              component={RouterLink}
              to={PATH_PAGE.auth.register}
            >
              Get started
            </Link>
          </Box>
        </Hidden> */}
      </header>

      <Hidden mdDown>
        <Section />
      </Hidden>

      <Container>
        <div className={classes.content}>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Sign in to Data Management Console
            </Typography>
            <Typography color="textSecondary">
              Click to the login button this will redirect you to SSO page
            </Typography>
          </Box>

          {/* <SocialLogin firebase={firebase} />

          <Divider className={classes.divider}>
            <Typography variant="body2" color="textSecondary">
              OR
            </Typography>
          </Divider> */}

          <Box sx={{ mb: 5 }}>
            <Alert severity="info">
              User : <strong>admin</strong> / password :
              <strong>&nbsp;hHTRbquOefLOPnVW</strong>
            </Alert>
          </Box>

          <Button
            fullWidth
            size="large"
            href={`${apiConfig.baseUrl}/auth`}
            variant="contained"
          >
            Login
          </Button>

          <Hidden smUp>
            <Box sx={{ mt: 3, typography: 'body2', textAlign: 'center' }}>
              Don’t have an account?&nbsp;
              <Link
                variant="subtitle2"
                to={PATH_PAGE.auth.register}
                component={RouterLink}
              >
                Get started
              </Link>
            </Box>
          </Hidden>
        </div>
      </Container>
    </Page>
  );
}

export default LoginView;
